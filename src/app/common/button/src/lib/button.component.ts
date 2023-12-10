import {
  AfterContentChecked,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component, ElementRef, inject, Input,
  numberAttribute,
  ViewEncapsulation
} from '@angular/core';
import { ButtonIntent, ButtonVariant } from './button.types';

@Component({
  //eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[v-button], button[vButton]',
  template: `
    <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'v-button',
    '[class.v-button-icon]': `onlyIcon`,
    '[class.v-button-block]': `block`,
    '[class.v-button-loading]': `loading`,
    '[class.v-button-disabled]': `disabled`,
    '[class.v-button-solid]': `variant === 'solid'`,
    '[class.v-button-outline]': `variant === 'outline'`,
    '[class.v-button-text]': `variant === 'text'`,
    '[class.v-button-transparent]': `variant === 'transparent'`,
    '[class.v-button-primary]': `intent === 'primary'`,
    '[class.v-button-danger]': `intent === 'danger'`,
    '[class.v-button-warning]': `intent === 'warning'`,
    '[class.v-button-success]': `intent === 'success'`,
    '[attr.disabled]': `disabled || loading ? '' : null`,
    '[attr.tabIndex]': `disabled ? -1 : tabIndex === null ? null : tabIndex`
  }
})
export class ButtonComponent implements AfterContentChecked {
  @Input() public intent: ButtonIntent = 'default';
  @Input() public variant: ButtonVariant = 'solid';
  @Input({ transform: numberAttribute }) public tabIndex: number | null = null;
  @Input({ transform: booleanAttribute }) public block = false;
  @Input({ transform: booleanAttribute }) public loading = false;
  @Input({ transform: booleanAttribute }) public disabled = false;

  protected elementRef = inject(ElementRef);
  protected onlyIcon = false;

  ngAfterContentChecked() {
    const { childNodes } = this.elementRef.nativeElement;
    this.onlyIcon = childNodes.length === 1 && ['V-ICON', 'SVG'].includes(childNodes[0].nodeName);
  }

}
