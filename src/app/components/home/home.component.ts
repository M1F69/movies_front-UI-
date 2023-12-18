import {Component, inject, Injector} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ToolbarModule} from "../../common/toolbar/src";
import {GenreCardComponent} from "../../common/genre-card/genre-card.component";
import {SettingsFormComponent} from "../../common/settings-form/settings-form.component";
import {DialogService} from "../../common/dialog/src";
import {AppService} from "../../app.service";
import {CardElementComponent} from "../../common/card-element/card-element.component";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  standalone: true,
  providers: [DialogService],
  imports: [
    AsyncPipe,
    NgIf,
    ToolbarModule,
    GenreCardComponent,
    CardElementComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrls: ["../../style/ui/button.scss", "../../style/ui/spin.scss", '../../style/ui/move-content.scss'],
  host: {
    class: 'flex-col bg-lime-100',
  },
})
export class HomeComponent {
  protected readonly dialogService = inject(DialogService);
  protected readonly injector = inject(Injector);
  protected readonly appService = inject(AppService);
  protected readonly router = inject(Router);

  constructor() {
  }

  openSettingsPanel() {
    const dataCategories = this.appService.Categories$.value;
    this.dialogService.show(SettingsFormComponent, {injector: this.injector, data: {dataCategories}})
  }

  openList(index: number) {
    console.log(index);

    this.router.navigate(['list'])

    //routing to list
  }
}

