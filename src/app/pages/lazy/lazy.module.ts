import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FileUploadModule } from '../../importModules/file-upload/file-upload.module';
import { LazyCompAComponent } from './lazy-comp-a/lazy-comp-a.component';

export const routes: Routes = [
  { path: '', component: LazyCompAComponent }
]

@NgModule({
  declarations: [LazyCompAComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ],
  exports: [LazyCompAComponent]
})
export class LazyModule { }
