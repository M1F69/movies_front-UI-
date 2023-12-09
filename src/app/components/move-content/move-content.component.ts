import { Component } from '@angular/core';

@Component({
  selector: 'move-content',
  standalone: true,
  imports: [],
  templateUrl: './move-content.component.html',
  styleUrl: './move-content.component.css',
  host: {
    class: 'flex flex-1 bg-cyan-200',
  },
})
export class MoveContentComponent {

}
