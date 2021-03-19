import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';

import { InputRegexValidationsComponent } from './input-regex-validations/input-regex-validations.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

const routes: Route[] = [
  {
    path: '',
    children: [

      {
        path: 'regex', component: InputRegexValidationsComponent
      },
      {
        path: 'skeleton', component: SkeletonLoaderComponent
      },
      {
        path: 'sweetalert', component: SweetAlertComponent
      },
      {
        path: 'pdf', component: ViewPdfComponent
      },
      {
        path: 'qrcode', component: QrcodeComponent
      },
      {
        path: 'clipboard', component: ClipboardComponent
      },
      {
        path: '', redirectTo: '/regex', pathMatch: 'full'
      },

    ]
  }
]


@NgModule({
  declarations: [
    InputRegexValidationsComponent,
    SkeletonLoaderComponent,
    SweetAlertComponent,
    ViewPdfComponent,
    QrcodeComponent,
    ClipboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    QRCodeModule,
    ClipboardModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild(routes,)
  ]
})
export class FeaturesModule { }
