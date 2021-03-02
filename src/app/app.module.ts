import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleService } from './services/article/article.service';
import { PostService } from './services/post/post.service';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './components/home/skills/skills.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'posts', component: CommentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CommentsComponent,
    FooterComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [ArticleService, PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
