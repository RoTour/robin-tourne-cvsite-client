import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  items = [
    'My Skills',
    'CV-Game',
    'Comments',
  ];

  username = '';

  dropdownState = 'hiddendiv';

  private static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ngOnInit(): void {
    // Hide dropdown zhen not still focused
    window.onclick = (e: any) => {
      if (!e.target.matches('.dropbtn')) {
        const myDropdown = document.getElementById('myDropdown');
        if (!myDropdown) { throw new Error('"myDropdown" not found! check navbar .html file!'); }
        if (myDropdown.classList.contains('show')) {
          this.toggleDropdown();
        }
      }
    };
  }

  toggleDropdown(): void {
    this.dropdownState = this.dropdownState === 'hiddendiv' ? 'show' : 'hiddendiv';
  }

  logoutUser(): void {
    this.authService.logout();
    location.reload();
  }

  getLoggedUserName(): string | undefined{
    const userName = this.authService.getUsername();
    if (!userName) { return ''; }
    return NavbarComponent.capitalizeFirstLetter(userName);
  }
}
