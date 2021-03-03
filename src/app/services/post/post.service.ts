import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private baseUrl = 'http://localhost:3000/';
  private baseUrl = 'https://robin-tourne-cvsite-server.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPosts = () => {
    return this.http.get(this.baseUrl + 'post');
  }

  sendPost = (payload: any, options: any) => {
    return this.http.post('http://localhost:3000/post', payload, options);
  }
}
