import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // private baseUrl = 'http://localhost:3000/';
  private baseUrl = 'https://robin-tourne-cvsite-server.herokuapp.com/';

  private tokenStorageKey = 'contacts-jwt';
  private userStorageKey = 'user';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${this.getToken()}`,
      username: `${this.getUsername()}`,
    })
  };

  setData = (token: string, username: string) => {
    localStorage.setItem(this.tokenStorageKey, token);
    localStorage.setItem(this.userStorageKey, username);
  }

  getToken(): string | null{
    return localStorage.getItem(this.tokenStorageKey);
  }

  getUsername(): string | null{
    return localStorage.getItem(this.userStorageKey);
  }

  isLoggedIn = () => {
    return (this.getToken() !== undefined && this.getToken() !== null
    && this.getUsername() !== undefined && this.getUsername() !== null);
  }

  logout = () => {
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.userStorageKey);
    location.reload();
  }

  login = (payload: any) => {
    return this.http.post(this.baseUrl + 'auth/login', payload);
  }

  register = (payload: any) => {
    return this.http.post(this.baseUrl + 'auth/register', payload);
  }

  getUserInfos = () => {
    return this.http.get(this.baseUrl + 'auth/user-info', this.httpOptions);
  }
}
