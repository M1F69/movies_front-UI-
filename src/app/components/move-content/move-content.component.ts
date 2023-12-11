import {Component, inject, Injector} from '@angular/core';
import {DialogModule, DialogService} from "../../common/dialog/src";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {AppService} from "../../app.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {filter, OperatorFunction} from "rxjs";

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
}
