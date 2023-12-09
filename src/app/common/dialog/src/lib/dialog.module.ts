import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { DialogService } from './dialog.service';
import { DialogComponent } from './dialog.component';
import {
  DialogActionsDirective,
  DialogCloseDirective,
  DialogContentDirective,
  DialogTitleDirective
} from './dialog.directive';
import { ConfirmComponent } from './confirm.component';


@NgModule({
  imports: [OverlayModule, PortalModule],
  providers: [DialogService],
  declarations: [DialogComponent, DialogActionsDirective, DialogCloseDirective, DialogContentDirective, DialogTitleDirective, ConfirmComponent],
  exports: [DialogActionsDirective, DialogContentDirective, DialogTitleDirective, DialogCloseDirective, ConfirmComponent]
})
export class DialogModule {
}
