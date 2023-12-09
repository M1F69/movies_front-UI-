import {Component, inject, Injector} from '@angular/core';
import {DialogModule, DialogService} from "../../common/dialog/src";
import {FormElementComponent} from "../../common/form-element/form-element.component";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {AppService} from "../../app.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {async} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MoveEntity} from "../../Entities/entity";


@Component({
  selector: 'move-content',
  standalone: true,
  providers: [DialogModule, DialogService],
  imports: [MovieFormComponent, NgIf, AsyncPipe],
  templateUrl: './move-content.component.html',
  host: {
    class: 'flex flex-1 bg-cyan-200',
  },
})
export class MoveContentComponent {
  protected readonly dialogService = inject(DialogService);
  protected readonly injector= inject(Injector);

  protected readonly appService = inject(AppService);
      protected readonly http = inject(HttpClient);

  funcOpenForm() {
    this.dialogService.show(MovieFormComponent, {injector: this.injector})
  }

constructor() {
    this.appService.currentMovie$.subscribe(
      (current)=>{


        this.http.get(`/api/Movies/${current?.id}/download`, {responseType: "blob"}).subscribe((pic)=>{console.log(pic)})
      }
    )

  }
}
