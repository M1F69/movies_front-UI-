import {Component, Input} from '@angular/core';

@Component({
  selector: 'genre-card',
  standalone: true,
  imports: [],
  templateUrl: './genre-card.component.html',
  host: {
    class: ""
  }
})
export class GenreCardComponent {
  @Input() title:string =""
  @Input() imgUrl:string =""

}
