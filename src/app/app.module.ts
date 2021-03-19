import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { WebworkerDemoComponent } from './pages/webworker-demo/webworker-demo.component';
import { InputRegexValidationsComponent } from './pages/input-regex-validations/input-regex-validations.component';
import { SkeletonLoaderComponent } from './pages/skeleton-loader/skeleton-loader.component';
import { SweetAlertComponent } from './pages/sweet-alert/sweet-alert.component';
import { ViewPdfComponent } from './pages/view-pdf/view-pdf.component';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { ClipboardComponent } from './pages/clipboard/clipboard.component';
import { InputFocusDirective } from './directives/input-focus.directive';

import { AuthGuard } from './guards/auth.guard';
import { HttpcancelService } from './services/httpcancel.service';
import { ManageHttpInterceptor } from './interceptors/manage-http.interceptor';
import { LazyImgDirective } from './directives/lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    WebworkerDemoComponent,
    InputRegexValidationsComponent,
    SkeletonLoaderComponent,
    SweetAlertComponent,
    ViewPdfComponent,
    QrcodeComponent,
    ClipboardComponent,
    InputFocusDirective,
    LazyImgDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    QRCodeModule,
    ClipboardModule,
    NgxSkeletonLoaderModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately'  })
  ],
  providers: [
    HttpcancelService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ManageHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
