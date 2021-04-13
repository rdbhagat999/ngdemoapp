import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MetaService } from './services/meta.service';

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
export class AppComponent implements OnInit {

  isCollapsed = true;
  cardTitle = 'Angular SSR App';
  cardDescription = '';
  siteURL = 'https://rdbhagat999.github.io/ngdemoapp';
  imageURL = 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200';

  constructor(private readonly metaService: MetaService) {
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.metaService.setPageTitle(this.cardTitle);
    this.metaService.setTwitterCardMetaData(this.cardTitle, this.cardDescription, this.siteURL, this.imageURL);
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
