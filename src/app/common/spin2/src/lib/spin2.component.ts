import { booleanAttribute, ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'spin',
  templateUrl: './spin2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'v-spin'
  }
})
export class Spin2Component {
  @Input({ transform: booleanAttribute }) visible = false;
}
