import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
      })),
      state('expanded', style({
        opacity: 1,
      })),
      transition('collapsed => expanded', [
        animate('500ms ease-in-out')
      ]),
      transition('expanded => collapsed', [
        animate('500ms ease-in')
      ]),
    ]),
  ],
})
export class AppComponent {

  isCollapsed = true;

  ngOnInit() {
    this.isCollapsed = true;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
