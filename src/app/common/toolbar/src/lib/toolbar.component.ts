import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'toolbar',
  template: `
    <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,
  styleUrl: '../../../../style/ui/toolbar.scss',
  host: {
    class: 'toolbar' ,
    '[class.toolbar-md]': `size === 'md'`,
    '[class.toolbar-sm]': `size === 'sm'`,
    '[class.toolbar-xs]': `size === 'xs'`
  }
})
export class ToolbarComponent {

  @Input() size: 'md' | 'sm' | 'xs' = 'md';

}
