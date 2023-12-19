import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlertListComponent } from './alert-list.component';

@NgModule({
  imports: [CommonModule ],
  declarations: [AlertListComponent],
  exports: [AlertListComponent],
})
export class AlertModule {}
