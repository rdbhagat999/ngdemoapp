import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('collapsed', style({
        // display: 'none',
        opacity: 1,
        height: '0px',
      })),
      state('expanded', style({
        opacity: 1,
        // display: 'flex',
      })),
      transition('collapsed => expanded', [
        animate('200ms ease-in')
      ]),
      transition('expanded => collapsed', [
        animate('200ms ease-in')
      ]),
    ]),
  ],
})
export class AppComponent {

  isCollapsed = true;

  constructor() {
    this.isCollapsed = true;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
