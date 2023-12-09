import {Component, Input} from '@angular/core';
import {CardElementComponent} from "../card-element/card-element.component";
import {NgForOf} from "@angular/common";
import {MoveEntity} from "../../components/move-list/move-list.component";

@Component({
  selector: 'list',
  standalone: true,
  imports: [
    CardElementComponent,
    NgForOf
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() moveArray:MoveEntity[]|null=null;
}
