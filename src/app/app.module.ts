import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WebworkerDemoComponent } from './pages/webworker-demo/webworker-demo.component';
import { InputFocusDirective } from './directives/input-focus.directive';

import { AuthGuard } from './guards/auth.guard';
import { HttpcancelService } from './services/httpcancel.service';
import { ManageHttpInterceptor } from './interceptors/manage-http.interceptor';
import { LazyImgDirective } from './directives/lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    WebworkerDemoComponent,
    InputFocusDirective,
    LazyImgDirective,
  ],
  imports: [
    BrowserModule,
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
