import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  faGithub = faGithub;
  faGamepad = faGamepad;
  faLinkedin = faLinkedinIn;
  faDocument = faFileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
