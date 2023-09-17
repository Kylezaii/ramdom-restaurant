import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/randomRestaurant";

  constructor(private httpClient: HttpClient) { }

  getRandomRestaurant(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  createNewRestaurant(restaurant: String): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }
}
