import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8945';

  constructor(private http: HttpClient) { }

  setUserDataInSession(userData: any): void {
    console.log('Setting user data in session:', userData);
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }
  

  getUserDataFromSession(): any | null {
    try {
      const userDataString = sessionStorage.getItem('userData');
  
      if (!userDataString) {
        console.warn('User data not found in session storage.');
        return null;
      }
  
      // Check if userDataString is 'undefined'
      if (userDataString.toLowerCase() === 'undefined') {
        console.warn('User data is set to "undefined" in session storage.');
        return null;
      }
  
      return JSON.parse(userDataString);
    } catch (error) {
      console.error('Error parsing user data from session storage:', error);
      return null;
    }
  }
  

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  checkPhoneNumber(phone: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${phone}`);
  }

  generateOTP(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/getOtp`, { phoneNumber });
  }

  validateOTP(otp: string): Observable<any> {
    const userData = this.getUserDataFromSession();

    if (!userData || !userData.phone) {
      return throwError('User not logged in or phone number not found');
    }

    const phoneNumber = userData.phone;

    return this.http.post(`${this.apiUrl}/validateOtp`, { otp, phoneNumber });
  }



  public checkUserExists(subAccountData: any): Observable<boolean> {
    console.log('Checking user existence:', subAccountData);
  
    // Assuming phone is the unique identifier
    const phoneNumber = subAccountData.phone;
  
    // Adjust the API endpoint if needed
    return this.http.get<boolean>(`${this.apiUrl}/accounts/{primaryAccountId}/sub/checkUserExists/${phoneNumber}`);
  }
  


  linkSubAccount(primaryAccountId: number, subAccount: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/accounts/${primaryAccountId}/sub/link`, subAccount);
}

getSubAccounts(primaryAccountId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/accounts/${primaryAccountId}/sub`);
}


  isUserLoggedIn(): boolean {
    return this.getUserDataFromSession() !== null;
  }

  logout(): void {
    // Remove user data from session storage
    sessionStorage.removeItem('userData');
  }
}
