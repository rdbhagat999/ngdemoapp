import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-comp-a',
  templateUrl: './lazy-comp-a.component.html',
  styleUrls: ['./lazy-comp-a.component.scss']
})
export class LazyCompAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleFileEvent(event) {
    console.log(event);
    return false;
  }

}
