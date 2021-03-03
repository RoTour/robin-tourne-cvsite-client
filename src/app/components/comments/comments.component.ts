import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postApi: PostService) {
    this.postApi.getPosts()
    .subscribe(
      (data: any) => {
        data.forEach((it: any) => {
          this.posts.push(new Post(it.id, it.text, it.createdAt, it.updatedAt, it.ownerName));
        });
        this.posts.sort((post1: Post, post2: Post) => {
          if (post1.createdAt <= post2.createdAt) { return 1; }
          else { return -1; }
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {}

  getDate(date: Date): Date {
    return new Date(date);
  }
}
