import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { PostService } from '../../services/post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit, OnDestroy {
  html = '';
  editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onSubmitPost(): void {
    console.log(this.form.controls.editorContent.value);
    this.authService.getUserInfos()
      .subscribe(
        (data: any) => {
          const payload = {
            userEmail: data.email,
            text: this.form.controls.editorContent.value,
          };
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Authorization: `JWT ${this.authService.getToken()}`,
              Username: data.username,
            })
          };
          this.sendPost(payload, httpOptions);
        },
        error => {
          console.log(error);
        }
      );
  }

  sendPost(payload: any, options: any): void {
    this.postService.sendPost(payload, options)
    .subscribe(
      async () => {
        await this.router.navigate(['/posts']);
      },
      error => console.log(error)
    );
  }

}
