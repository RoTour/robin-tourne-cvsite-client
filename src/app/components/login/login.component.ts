import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  COLORS = {
    success: '00c853',
    error: 'e53935',
  };
  email = '';
  password = '';
  username = '';
  popup = {
    message: '',
    color: this.COLORS.error,
  };

  faClose = faTimesCircle;
  faUser = faUser;
  selected = 'login';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit($event: Event): void {
    $event.preventDefault();
    this.popup.message = '';
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(payload)
      .subscribe(
        async (data: any) => {
          console.log(data);
          // console.log([{ broken: data['token'] }, { clea: data.token }]);
          this.authService.setData(data.token, data.username);
          await this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.popup.message = 'Incorrect password or email.';
          this.popup.color = this.COLORS.error;
        }
      );
  }

  register($event: Event): void {
    $event.preventDefault();
    const payload = {
      email: this.email,
      password: this.password,
      username: this.username,
      role: '0',
    };
    this.authService.register(payload)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.popup.message = 'Account created successfully, you can now sign-in';
          this.popup.color = this.COLORS.success;
        },
        error => {
          console.log(error);
        }
      );
  }

  emptyMessage(): void {
    this.popup.message = '';
  }
}
