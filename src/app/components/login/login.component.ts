import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit($event: Event): void {
    $event.preventDefault();
    this.message = '';
    const payload = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(payload)
      .subscribe(
        async (data: any) => {
          // console.log([{ broken: data['token'] }, { clea: data.token }]);
          this.authService.setToken(data.token);
          await this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.message = 'Incorrect password or email.';
        }
      );
  }
}
