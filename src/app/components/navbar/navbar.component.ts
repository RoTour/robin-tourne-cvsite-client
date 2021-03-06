import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) {}

  items = [
    'My Skills',
    'CV-Game',
    'Comments',
  ];

  faMenu = faBars;

  username = '';
  role = 0;

  dropdownState = 'hiddendiv';
  navbarExtended = false;

  private static capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ngOnInit(): void {
    // Hide dropdown when not still focused
    window.onclick = (e: any) => {
      if (!e.target.matches('.dropbtn')) {
        const myDropdown = document.getElementById('myDropdown');
        // if (!myDropdown) { throw new Error('"myDropdown" not found! check navbar .html file!'); }
        if (myDropdown && myDropdown.classList.contains('show')) {
          this.toggleDropdown();
        }
      }
    };

    if (this.authService.isLoggedIn()) {
      this.getUserInfos();
    }
  }

  toggleDropdown(): void {
    this.dropdownState = this.dropdownState === 'hiddendiv' ? 'show' : 'hiddendiv';
  }

  logoutUser(): void {
    this.authService.logout();
    location.reload();
  }

  getUserInfos(): void {
    this.authService.getUserInfos()
      .subscribe(
        (data: any) => {
          this.username = NavbarComponent.capitalizeFirstLetter(data.username);
          this.role = data.role;
        },
        error => {
          console.log(error);
        }
      );
  }

  toggleNavbarExtended(): void {
    this.navbarExtended = !this.navbarExtended;
  }
}
