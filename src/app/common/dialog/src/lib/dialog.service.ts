import { inject, Injectable, InjectionToken, Injector, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

import { DialogComponent } from './dialog.component';
import { DialogRef } from './dialog-ref';
import { ConfirmComponent, ConfirmOptions } from './confirm.component';
import { Subject } from 'rxjs';

export const DIALOG_DATA = new InjectionToken<any>('[DIALOG_DATA]');

@Injectable()
export class DialogService {
  overlay = inject(Overlay);

  confirm(options: ConfirmOptions): Subject<'confirm' | 'cancel'> {
    return this.show(ConfirmComponent, { data: options }).afterClose as Subject<'confirm' | 'cancel'>;
  }

  show<T>(template: TemplateRef<{ $implicit: T }>, options: {
    viewContainerRef: ViewContainerRef,
    injector?: Injector,
    data?: T,
    allowBackdropClick?: boolean
  }): DialogRef;
  show<T>(template: ComponentType<any>, options?: {
    viewContainerRef?: ViewContainerRef,
    injector?: Injector,
    data?: T,
    allowBackdropClick?: boolean
  }): DialogRef;
  show<T>(template: TemplateRef<unknown> | ComponentType<any>, options: {
    viewContainerRef?: ViewContainerRef,
    injector?: Injector,
    data?: T,
    allowBackdropClick?: boolean
  } = {}): DialogRef {
    const overlayRef = this.createOverlay();
    const componentPortal = new ComponentPortal(DialogComponent);

    const componentRef = overlayRef.attach(componentPortal);

    const dialogRef = new DialogRef(overlayRef, componentRef.instance);

    if (template instanceof TemplateRef) {
      componentRef.instance.attachTemplatePortal(
        new TemplatePortal(template, options.viewContainerRef!, { $implicit: options.data })
      );
    } else {
      const injector = Injector.create({
        parent: options.injector ?? (options.viewContainerRef && options.injector),
        providers: [
          { provide: DialogRef, useValue: dialogRef },
          { provide: DIALOG_DATA, useValue: options.data }
        ]
      });

      componentRef.instance.attachComponentPortal(
        new ComponentPortal(template, options.viewContainerRef, injector)
      );
    }

    if (options.allowBackdropClick) {
      overlayRef.backdropClick().subscribe(() => {
        dialogRef.close();
      });
    }

    return dialogRef;
  }

  private createOverlay() {
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'v-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });


    return this.overlay.create(config);
  }

}