import {Component, inject, Injector} from '@angular/core';
import {MoveListComponent} from "../move-list/move-list.component";
import {MoveContentComponent} from "../move-content/move-content.component";
import {Spin2Module} from "../../common/spin2/src";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {DialogModule, DialogService} from "../../common/dialog/src";
import {LoginFormComponent} from "../login-form/login-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'move-space',
  standalone: true,
  imports: [
    MoveListComponent,
    MoveContentComponent,
    Spin2Module,
    NgIf
  ],
  providers: [DialogModule, DialogService],

  templateUrl: './move-space.component.html',
  host: {
    class: 'h-full w-full',
  },
})
export class MoveSpaceComponent {

  protected readonly dialogService = inject(DialogService);
  protected readonly injector = inject(Injector);
protected content:boolean =false

  openFormLogin() {
    this.dialogService.show(LoginFormComponent, {injector: this.injector}).afterClose.subscribe((x:boolean)=>{
      this.content=x
    })
  }
  constructor() {
    this.openFormLogin()
  }
}
