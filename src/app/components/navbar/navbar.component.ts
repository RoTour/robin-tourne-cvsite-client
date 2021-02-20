import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    'My Skills',
    'CV-Game',
    'Comments',
  ];

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

  textToPath(str: string): string {
    str = str.replace(' ', '-');
    return str.toLowerCase();
  }

}
