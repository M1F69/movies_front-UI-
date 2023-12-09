import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MoveEntity} from "./Entities/entity";

@Injectable({
  providedIn: 'root'
})
export class AppService  {
  public readonly currentMovie$ =
    new BehaviorSubject<MoveEntity | null>(null);
  constructor() { }
}
