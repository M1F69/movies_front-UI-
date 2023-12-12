import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MoveEntity} from "./Entities/entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService  {
  protected readonly http = inject(HttpClient);

  public readonly currentMovie$ =
    new BehaviorSubject<MoveEntity | null>(null);

  public  movies: MoveEntity[] = [];


  constructor() { }

  public loadMovies() {
    this.http.get<{ value: MoveEntity[] }>("/api/movies/").subscribe(({value}) => {
      this.movies = value;
    })

  }
}
