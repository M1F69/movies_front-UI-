import {Component, inject, Injector} from '@angular/core';
import {DialogModule, DialogService} from "../../common/dialog/src";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {AppService} from "../../app.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {filter, OperatorFunction} from "rxjs";
import {NotificationFormComponent} from "../notification-form/notification-form.component";


export function filterNil<T>(): OperatorFunction<T, NonNullable<T>> {
  return filter(
    (value: T): value is NonNullable<T> => value !== null && value !== undefined
  );
}

@Component({
  selector: 'move-content',
  standalone: true,
  providers: [DialogModule, DialogService],
  imports: [MovieFormComponent, NgIf, AsyncPipe],
  templateUrl: './move-content.component.html',
  styleUrls: ["../../style/button.scss", './move-content.scss'],
  host: {
    class: 'flex flex-1 bg-lime-100',
  },
})
export class MoveContentComponent {
  protected readonly dialogService = inject(DialogService);
  protected readonly injector = inject(Injector);

  protected readonly appService = inject(AppService);
  protected readonly http = inject(HttpClient);

  protected href: string | null = null;
  protected cache = new Map<string, string>();

  funcOpenForm() {
    this.dialogService.show(MovieFormComponent, {injector: this.injector})
  }

  constructor() {
    this.appService.currentMovie$.pipe(
      filterNil()
    ).subscribe(
      (value) => {
        let href = this.cache.get(value.id)

        if(href) {
          this.href = href;
          return;
        }


        this.http.get(
          `/api/movies(${value.id})/download`,
          { responseType: 'blob' }
        ).subscribe((blob) => {
          href = URL.createObjectURL(blob);
          this.cache.set(value.id, (this.href = href))
        })
      }
    )

  }

  funcDeleteFilm() {
      this.dialogService.show(NotificationFormComponent, {injector: this.injector}).afterClose.subscribe((response)=>{
        switch (response){
          case 'Cancel':
            break
          case 'Confirm':
            const current = this.appService.currentMovie$.value
            this.http.delete(`/api/movies(${current?.id})/`).subscribe(x=>console.log(x))
          //   del func
            break

          }
      })


  }
}
