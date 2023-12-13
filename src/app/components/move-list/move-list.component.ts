import {Component, inject} from '@angular/core';
import {ListComponent} from "../../common/list/list.component";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../app.service";
import {ToolbarModule} from "../../common/toolbar/src";

@Component({
  selector: 'move-list',
  standalone: true,
  imports: [
    ListComponent,
    ToolbarModule
  ],
  templateUrl: './move-list.component.html',
  host: {
    class: 'flex flex-col w-[360px]  bg-lime-100'
  }
})
export class MoveListComponent {
  protected readonly http = inject(HttpClient);
  protected readonly appService = inject(AppService);



  constructor() {
    this.appService.loadMovies()
  }


}

