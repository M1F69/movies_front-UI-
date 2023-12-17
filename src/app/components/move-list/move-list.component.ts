import {Component, inject} from '@angular/core';
import {ListComponent} from "../../common/list/list.component";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../app.service";
import {ToolbarModule} from "../../common/toolbar/src";
import {GenreCardComponent} from "../../common/genre-card/genre-card.component";
import {MoveContentComponent} from "../move-content/move-content.component";

@Component({
  selector: 'move-list',
  standalone: true,
  imports: [
    ListComponent,
    ToolbarModule,
    GenreCardComponent,
    MoveContentComponent
  ],
  templateUrl: './move-list.component.html',
  host: {
    class: 'flex h-full w-full '
  }
})
export class MoveListComponent {
  protected readonly http = inject(HttpClient);
  protected readonly appService = inject(AppService);



  constructor() {
    this.appService.loadMovies()
  }


}

