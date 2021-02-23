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
