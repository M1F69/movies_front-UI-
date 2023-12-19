import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MoveSpaceComponent} from "./components/move-space/move-space.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MoveSpaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'absolute inset-0 w-full h-full max-h-screen max-w-screen flex flex-col overflow-hidden'
  }
})
export class AppComponent {
  public customColor:string = '#d3dce6'
  
}
