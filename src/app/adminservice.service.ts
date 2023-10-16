import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private apiUrl = 'http://localhost:8945'; // Replace with your Spring Boot API URL

  constructor(private httpClient: HttpClient) { }
  
  paymentHistory()
  {
    return this.httpClient.get('http://localhost:8945/history');
  }
}
