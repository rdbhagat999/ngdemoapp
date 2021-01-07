import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebworkerDemoComponent } from './pages/webworker-demo/webworker-demo.component';
import { InputRegexValidationsComponent } from './pages/input-regex-validations/input-regex-validations.component';
import { SkeletonLoaderComponent } from './pages/skeleton-loader/skeleton-loader.component';
import { SweetAlertComponent } from './pages/sweet-alert/sweet-alert.component';
import { ViewPdfComponent } from './pages/view-pdf/view-pdf.component';
import { QrcodeComponent } from './pages/qrcode/qrcode.component';
import { ClipboardComponent } from './pages/clipboard/clipboard.component';

import { CustomPreloadingStrategy } from "./preload-strategy/custom-preloading-strategy";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WebworkerDemoComponent },
  { path: 'web-worker', component: WebworkerDemoComponent },
  { path: 'regex-validations', component: InputRegexValidationsComponent },
  { path: 'skelton-loader', component: SkeletonLoaderComponent },
  { path: 'sweet-alert', component: SweetAlertComponent },
  { path: 'pdf-viewer', component: ViewPdfComponent },
  { path: 'qr-code', component: QrcodeComponent },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'lazy', 
    loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule),
    data: { preload: true, delay: true, time: 5000 },
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
