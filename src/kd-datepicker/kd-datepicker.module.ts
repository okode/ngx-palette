import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KdDatepickerDirective } from './kd-datepicker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KdDatepickerDirective],
  exports: [KdDatepickerDirective]
})
export class OkodeNgxDatepickerModule {}
