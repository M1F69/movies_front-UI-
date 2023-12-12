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
  host: {
    class: 'flex w-[360px] border-r border-r-lime-400 bg-lime-100'
  }
})
export class MoveListComponent {
  protected readonly http = inject(HttpClient);
  protected readonly appService = inject(AppService);



  constructor() {
    this.appService.loadMovies()
  }


}

