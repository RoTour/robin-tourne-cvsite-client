import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private fetchAllPostsUrl = 'http://localhost:3000/post';
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  getPosts = () => {
    return this.http.get(this.fetchAllPostsUrl, this.httpOptions);
  }
}
