import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent {

  title = 'angular-qr-code-tutorial';

  public qrdata: string = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
    this.level = "M";
    this.qrdata = "Ramandeep Bhagat";
    this.width = 256;
  }

  changeLevel(newValue: "L" | "M" | "Q" | "H"): void {
    this.level = newValue;
  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }

}

