import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = 'http://localhost:3000/article';
  constructor() {
  }

}
