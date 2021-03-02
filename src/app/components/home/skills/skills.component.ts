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

  hardSkills = [
    { name: 'nodejs', description: '', title: 'Nodejs / Expressjs' },
    { name: 'angular', description: '', title: 'Angular' },
    { name: 'tsjs', description: '', title: 'Javascript / Typescript' },
    { name: 'laravel', description: '', title: 'Php Laravel' },
    { name: 'materialize', description: '', title: 'Materialize' },
    { name: 'mysql', description: '', title: 'MySQL / PostgreSQL / SQLite' },
  ];
  softSkills = [
    { name: 'curious', description: '', title: 'Curieux' },
    { name: 'gears', description: '', title: 'Autonome' },
    { name: 'multitask', description: '', title: 'Adaptatif' },
    { name: 'consciencieux', description: '', title: 'Consciencieux' },
  ];
  nbColumnHS = this.screen.width < 600 ? 1 : this.screen.width < 993 ? 2 : 3;
  nbColumnSS = this.screen.width < 600 ? 2 : 4;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any): void {
    this.screen.height = window.innerHeight;
    this.screen.width = window.innerWidth;
    const oldNbCol = this.nbColumnHS;
    this.nbColumnHS = this.screen.width < 600 ? 1 : this.screen.width < 993 ? 2 : 3;
    if (oldNbCol !== this.nbColumnHS) { location.reload(); }
  }
}
