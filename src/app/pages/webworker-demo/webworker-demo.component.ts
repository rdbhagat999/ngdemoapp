import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-webworker-demo',
  templateUrl: './webworker-demo.component.html',
  styleUrls: ['./webworker-demo.component.scss']
})
export class WebworkerDemoComponent implements OnInit {

  n = 99999999;
  randomUsers$: any;
  posts$: any;

  constructor(private readonly mockService: MockDataService) {
    this.randomUsers$ = this.mockService.getUsers(6);
    this.posts$ = this.mockService.getPosts(6);
  }

  ngOnInit(): void {}

  runWorker() {

    if (typeof Worker !== 'undefined') {

      const startTime = new Date().getTime();

      const numListWorker = new Worker('./num-list.worker', {
        type: 'module'
      });
      numListWorker.onmessage = ({ data }) => {
        console.log(new Date().getTime() - startTime);
        console.log('From numListWorker');
      };
      numListWorker.postMessage({n: this.n});

    } else {
      console.log('Web workers are not supported in this environment.');
    }
  }

  runThread() {

    const startTime = new Date().getTime();

    const numList = [];

    for(let i = 1; i < this.n; i++) {
      numList.push(i);
    }

    console.log(new Date().getTime() - startTime );
    console.log('From Javascript Thread');
    // console.log('From Javascript Thread', arePrimeList);
  }

}
