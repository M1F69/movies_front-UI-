import { Directive, ElementRef, inject } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[v-dialog-title], [vDialogTitle]',
  host: {
    class: 'v-dialog-title'
  }
})
export class DialogTitleDirective {

}

@Directive({
  selector: '[v-dialog-content], [vDialogContent]',
  host: {
    class: 'v-dialog-content'
  }
})
export class DialogContentDirective {

}

@Directive({
  selector: '[v-dialog-actions], [vDialogActions]',
  host: {
    class: 'v-dialog-actions'
  }
})
export class DialogActionsDirective {

}

@Directive({
  selector: '[v-dialog-close], [vDialogClose]',
  host: {
    class: 'v-dialog-close'
  }
})
export class DialogCloseDirective {
  elementRef = inject(ElementRef);
  dialogRef = inject(DialogRef);

  constructor() {
    fromEvent(this.elementRef.nativeElement, 'click').subscribe(() => {
      this.dialogRef.close();
    })
  }
}