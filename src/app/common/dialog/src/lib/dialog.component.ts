import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'v-dialog',
  template: `<ng-template cdkPortalOutlet></ng-template>`,
  styleUrl: './dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,
  host: {
    class: 'v-dialog flex'
  }
})
export class DialogComponent extends BasePortalOutlet {

  @ViewChild(CdkPortalOutlet, { static: true }) outlet!: CdkPortalOutlet;

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this.outlet.hasAttached()) {
      throw Error('dialog portal has attached');
    }
    return this.outlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this.outlet.hasAttached()) {
      throw Error('dialog portal has attached');
    }
    return this.outlet.attachTemplatePortal(portal);
  }


}
