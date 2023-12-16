import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MoveSpaceComponent} from "./components/move-space/move-space.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MoveSpaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    class: "flex flex-col h-full w-full "
  }
})
export class AppComponent {
  title = 'kursovoi';
}
