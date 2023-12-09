import {Component, Input, OnInit} from '@angular/core';
import {MoveEntity} from "../../components/move-list/move-list.component";

@Component({
  selector: 'card-element',
  standalone: true,
  imports: [],
  templateUrl: './card-element.component.html',
  styleUrl: './card-element.component.css',
  host: {
  }
})
export class CardElementComponent {
@Input() item: MoveEntity|null=null

}
