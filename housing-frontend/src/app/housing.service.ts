import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HousingService {


  private apiUrl = environment.apiUrl
  
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Backend not running or error fetching locations', error);
      return [];
    }
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);

      if (!response.ok) {
        return undefined;
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching housing location by id', error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string, phone: string)
  {
    return fetch('http://localhost:3001/apply',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone
      })
    });
  }
}