import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private loginUrl = 'http://localhost:3000/auth/login';

  private storageKey = 'contacts-jwt';

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `JWT ${this.getToken()}`,
  //   })
  // };

  setToken = (token: string) => {
    localStorage.setItem(this.storageKey, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn = () => {
    return (this.getToken() !== undefined && this.getToken() !== null);
  }

  logout = () => {
    localStorage.removeItem(this.storageKey);
  }

  login = (payload: any) => {
    return this.http.post(this.loginUrl, payload);
  }
}
