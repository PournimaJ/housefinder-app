require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
;

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('MySQL Connected');
});

// API to save application
app.post('/apply', (req, res) => {
  const { firstName, lastName, email, phone } = req.body;

  const sql = `
    INSERT INTO applications (first_name, last_name, email, phone)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [firstName, lastName, email, phone], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving application');
    } else {
      res.status(201).send({ message: 'Application saved successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});