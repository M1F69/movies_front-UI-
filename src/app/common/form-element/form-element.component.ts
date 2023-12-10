import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'form-element',
  standalone: true,
  imports: [],
  templateUrl: './form-element.component.html',
})
export class FormElementComponent {
  @Input() public controlTemplate!: TemplateRef<any>;

  @Input() public value: unknown = '';
  @Input() public title = '';
  @Input() public requiredField: boolean = false;

  @Output() public click = new EventEmitter();
}
