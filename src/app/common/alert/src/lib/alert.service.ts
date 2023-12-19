import { inject, Injectable, signal } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AlertInterface, AlertOptions } from './alert.interface';
import { AlertListComponent } from './alert-list.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private overlay = inject(Overlay);

  private alerts = signal(new Set<AlertInterface>());

  constructor() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().top().right(),
    });
    const component = new ComponentPortal(AlertListComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.alerts = this.alerts;
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }

  show(text: string, options: AlertOptions = {}) {
    const alert: AlertInterface = {
      text: text,
      timeout: undefined,
      closable: false,
      intent: 'primary',
      duration: 4500,
      ...options,
    };
    this.alerts.update((s) => s.add(alert));
    if (alert.duration > 0) {
      alert.timeout = window.setTimeout(
        () => this.alerts.update((s) => {
          s.delete(alert)
          return s;
        }),
        alert.duration
      );
    } else {
      alert.closable = true;
    }
  }
}
