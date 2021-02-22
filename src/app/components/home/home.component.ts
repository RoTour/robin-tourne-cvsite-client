import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  private postAlignedToRight = false;

  constructor(private postApi: PostService) {
  }

  ngOnInit(): void {
    this.postApi.getPosts()
    .subscribe(
      (data: any) => {
        data.forEach((it: any) => {
          this.posts.unshift(new Post(it.id, it.text, it.createdAt, it.updatedAt, it.ownerName));
        });
        console.log(this.posts);
      },
      error => {
        console.error(error);
      }
    );
  }

  getPostAlignAnToggle(): boolean {
    this.postAlignedToRight = !this.postAlignedToRight;
    return !this.postAlignedToRight;
  }
  getPostAlign(): boolean {
    return this.postAlignedToRight;
  }

}
