import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CardElementComponent} from "../card-element/card-element.component";
import {NgForOf} from "@angular/common";
import {MoveEntity} from "../../Entities/entity";

@Component({
  selector: 'list',
  standalone: true,
  imports: [
    CardElementComponent,
    NgForOf
  ],
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'flex h-[inherit]'
  }
})
export class ListComponent {
  @Input() declare moveArray: MoveEntity[]
}
