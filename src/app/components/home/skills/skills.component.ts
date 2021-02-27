import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private screen = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  skills = [
    { name: 'nodejs', description: '', title: 'Nodejs / Expressjs' },
    { name: 'angular', description: '', title: 'Angular' },
    { name: 'tsjs', description: '', title: 'Javascript / Typescript' },
    { name: 'laravel', description: '', title: 'Php Laravel' },
    { name: 'materialize', description: '', title: 'Materialize' },
    { name: 'mysql', description: '', title: 'MySQL / PostgreSQL / SQLite' },
  ];
  nbColumn = this.screen.width < 600 ? 1 : this.screen.width < 993 ? 2 : 3;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any): void {
    this.screen.height = window.innerHeight;
    this.screen.width = window.innerWidth;
    const oldNbCol = this.nbColumn;
    this.nbColumn = this.screen.width < 600 ? 1 : this.screen.width < 993 ? 2 : 3;
    if (oldNbCol !== this.nbColumn) { location.reload(); }
  }
}
