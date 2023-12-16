import {Component, inject, Injector} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ToolbarModule} from "../../common/toolbar/src";
import {GenreCardComponent} from "../../common/genre-card/genre-card.component";
import {SettingsFormComponent} from "../../common/settings-form/settings-form.component";
import {MovieFormComponent} from "../movie-form/movie-form.component";
import {DialogService} from "../../common/dialog/src";
import {CatalogType} from "../../Entities/entity";
import {AppService} from "../../app.service";
import {CardElementComponent} from "../../common/card-element/card-element.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ToolbarModule,
    GenreCardComponent,
    CardElementComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrls: ["../../style/ui/button.scss","../../style/ui/spin.scss", '../../style/ui/move-content.scss'],
  host: {
    class: 'flex h-full w-full bg-lime-100',
  },
})
export class HomeComponent {
  protected readonly dialogService = inject(DialogService);
  protected readonly injector = inject(Injector);
  protected readonly appService = inject(AppService);


  openSettingsPanel() {
    this.dialogService.show(   SettingsFormComponent, {injector: this.injector})
  }

  constructor() {
  }
}

