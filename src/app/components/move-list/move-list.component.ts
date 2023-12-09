import {Component, inject} from '@angular/core';
import {ListComponent} from "../../common/list/list.component";
import {MoveEntity} from "../../Entities/entity";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../app.service";

@Component({
  selector: 'move-list',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css',
  host: {
    class: 'flex w-[360px] border-r border-r-[#dfdfdf] bg-red-200'
  }
})
export class MoveListComponent {
  protected readonly http = inject(HttpClient);
  protected movies: MoveEntity[] = [];


  constructor() {
    this.http.get<{ value: MoveEntity[] }>("/api/movies/").subscribe(({ value }) => {
      this.movies = value;
    })
  }
}

