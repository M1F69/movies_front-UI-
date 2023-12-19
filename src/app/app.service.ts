import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CatalogType, MoveEntity} from "./Entities/entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public catalog: CatalogType[] = [
    {
      index: 0,
      trueTitle: 'fantastic',
      title: 'Фантастика',
      url: 'assets/fantastic.jpg'
    },
    {
      index: 1,
      trueTitle: 'horror',
      title: 'Ужасы',
      url: 'assets/horror.jpg'
    },
    {
      index: 2,
      trueTitle: 'fantastic',
      title: 'Семейный',
      url: 'assets/fantastic.jpg'
    },
    {
      index: 3,
      trueTitle: 'musical',
      title: 'Мюзикл',
      url: 'assets/musical.jpg'
    },
    {
      index: 4,
      trueTitle: 'crime',
      title: 'Криминал',
      url: 'assets/crime.jpg'
    },
    {
      index: 5,
      trueTitle: 'melodrama',
      title: 'Мелодрама',
      url: 'assets/melodrama.jpg'
    },
    {
      index: 6,
      title: 'Комедия',
      trueTitle: 'comedy',
      url: 'assets/comedy.jpg'
    },
    {
      index: 7,
      title: 'Документальный',
      trueTitle: 'documental',
      url: 'assets/documental.jpg'
    },
    {
      index: 8,
      title: 'Боевик',
      trueTitle: 'action movie',
      url: 'assets/actionmovie.jpg'
    },
    {
      index: 9,
      title: 'Военный',
      trueTitle: 'military',
      url: 'assets/military.jpg'
    },
    {
      index: 10,
      title: 'Детектив',
      trueTitle: 'detective',
      url: 'assets/detective.jpg'
    }
  ]

// ]


  protected readonly http = inject(HttpClient);

  public readonly currentMovie$ =
    new BehaviorSubject<MoveEntity | null>(null);

  public readonly Categories$ =
    new BehaviorSubject<[CatalogType, CatalogType, CatalogType]>([this.catalog[0], this.catalog[1], this.catalog[8]]);

  public movies: MoveEntity[] = [];
  public category: string = '';


  constructor() {
  }

  public loadMovies() {
    // TODO: add filter this.category
    this.http.get<{ value: MoveEntity[] }>("/api/movies/").subscribe(({value}) => {
      this.movies = value;
      console.log(value)
    })
  }

  public changeCategories(a: number, b: number, c: number) {
    this.Categories$.next([this.catalog[a], this.catalog[b], this.catalog[c]]);

  }


}

// фантастика       fantastic
// ужасы             horror
// семейный          family
// мюзикл             musical
// криминал          crime
// мелодрама         melodrama
// комедия           comedy
// документальный     documentary
// боевик            actionmovie
// военный            military
// детектив           detective
