import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  WritableSignal,
} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {AlertInterface} from './alert.interface';

@Component({
  selector: 'v-alerts-list',
  template: `
    <div
        @animate
        *ngFor="let alert of alerts()"
        class="flex flex-row overflow-hidden mb-2 items-start max-w-xs px-2 py-2 text-gray-500 bg-white rounded-lg shadow"
        [class.bg-green-500]="alert.intent === 'success'"
        [class.bg-red-500]="alert.intent === 'danger'"
        [class.bg-yellow-500]="alert.intent === 'warning'"
        [class.bg-slate-300]="alert.intent === 'primary'"
    >
      <span *ngIf="alert.text" class="text-md mx-2">{{ alert.text }}</span>
      <button
          *ngIf="alert.closable"
          (click)="deleteAlert(alert)"
          variant="transparent"
      >
      </button>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // the fade-in/fade-out animation.
    trigger('animate', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(100px)'}), //apply default styles before animation starts
        animate(
          '300ms ease-in-out',
          style({opacity: 1, transform: 'translateX(0)'})
        ),
      ]),
      transition('* => void', [
        style({visibility: 'hidden'}), //apply default styles before animation starts
        animate(
          '400ms ease-out',
          style({height: 0, padding: 0, marginBottom: 0})
        ),
      ]),
    ]),
  ],
  host: {
    class: 'flex flex-col p-4 items-end',
  },
})
export class AlertListComponent {
  public alerts!: WritableSignal<Set<AlertInterface>>;

  protected deleteAlert(alert: AlertInterface) {
    this.alerts.update((s) => {
      s.delete(alert)
      return s;
    });
  }
}
