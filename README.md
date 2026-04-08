# HouseFinder App

Full-stack application built with:

- Angular (Frontend)
- Node.js + Express (Backend)
- MySQL (Database)

## Installation

### Backend
cd housing-backend
npm install
node server.js

### Frontend
cd housing-frontend
npm install
ng serve

## Environment Variables

Create a .env file in housing-backend:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=************
DB_NAME=housing_app


Backend runs on http://localhost:3001  
Frontend runs on http://localhost:4200
housing-backend % json-server --watch db.json --port 3000
Endpoints:
http://localhost:3000/locations
