import { Component } from '@angular/core';
import {MoveListComponent} from "../move-list/move-list.component";
import {MoveContentComponent} from "../move-content/move-content.component";

@Component({
  selector: 'move-space',
  standalone: true,
  imports: [
    MoveListComponent,
    MoveContentComponent
  ],
  templateUrl: './move-space.component.html',
  styleUrl: './move-space.component.css',
  host: {
    class: 'h-full w-full',
  },
})
export class MoveSpaceComponent {

}
