import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsdadterloginserviceService {

  private apiUrl = 'http://localhost:8945'; 

  constructor(private httpClient: HttpClient) { }
  
  getIsdPlans()
  {
    return this.httpClient.get('http://localhost:8945/isd');
  }
}
