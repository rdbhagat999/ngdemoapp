import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileDndComponent } from '../file-upload/file-dnd/file-dnd.component';
import { ProgressComponent } from '../file-upload/progress/progress.component';

@NgModule({
  declarations: [FileDndComponent, ProgressComponent],
  imports: [
    CommonModule,
  ],
  exports: [FileDndComponent]
})
export class FileUploadModule { }
