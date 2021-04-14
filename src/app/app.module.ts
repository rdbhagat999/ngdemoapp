import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WebworkerDemoComponent } from './pages/webworker-demo/webworker-demo.component';
import { InputFocusDirective } from './directives/input-focus.directive';

import { AuthGuard } from './guards/auth.guard';
import { HttpcancelService } from './services/httpcancel.service';
import { ManageHttpInterceptor } from './interceptors/manage-http.interceptor';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';
import { AppShellNoRenderDirective } from './directives/app-shell-no-render.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WebworkerDemoComponent,
    InputFocusDirective,
    LazyImgDirective,
    AppShellRenderDirective,
    AppShellNoRenderDirective,
    LoaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
