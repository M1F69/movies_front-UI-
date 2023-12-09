import { OverlayRef } from '@angular/cdk/overlay';

import { DialogComponent } from './dialog.component';
import { Subject } from 'rxjs';

export class DialogRef<T = any> {
  afterClose = new Subject<T | null>();

  constructor(
    public readonly overlayRef: OverlayRef,
    public readonly componentRef: DialogComponent
  ) {}

  close(payload: T | null = null) {
    this.afterClose.next(payload);
    this.afterClose.complete();

    this.overlayRef.detach();
  }
}