import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webworker-demo',
  templateUrl: './webworker-demo.component.html',
  styleUrls: ['./webworker-demo.component.scss']
})
export class WebworkerDemoComponent implements OnInit {

  n = 99999999;

  constructor() { }

  ngOnInit(): void {
  }

  runWorker() {

    const startTime = new Date().getTime();
    
    const numListWorker = new Worker('../../web-workers/num-list.worker', { 
      type: 'module' 
    });
    numListWorker.onmessage = ({ data }) => {
      console.log(new Date().getTime() - startTime);
      console.log('From Web Worker');
      // console.log('From Web Worker:', data);
    };
    numListWorker.postMessage({n: this.n});
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
