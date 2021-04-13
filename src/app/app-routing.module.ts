import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebworkerDemoComponent } from './pages/webworker-demo/webworker-demo.component';

import { CustomPreloadingStrategy } from "./preload-strategy/custom-preloading-strategy";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WebworkerDemoComponent },
  { path: 'web-worker', component: WebworkerDemoComponent },
  { path: 'features',
    loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule),
  },
  { path: 'lazy',
    loadChildren: () => import('./pages/lazy/lazy.module').then(m => m.LazyModule),
    data: { preload: false, delay: false, time: 5000 },
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy,
    relativeLinkResolution: 'legacy',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
