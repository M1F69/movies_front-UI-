import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {MoveEntity} from "../../Entities/entity";
import {AppService} from "../../app.service";

@Component({
  selector: 'card-element',
  standalone: true,
  imports: [],
  templateUrl: './card-element.component.html',
  host: {
    class: ""
  }
})
export class CardElementComponent {
  protected readonly appService= inject(AppService)
@Input() declare item: MoveEntity


  protected pushCurrent() {
    this.appService.currentMovie$.next(this.item)
    console.log("current change", this.item)

  }
}
