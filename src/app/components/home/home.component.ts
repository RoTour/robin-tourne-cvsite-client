import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
