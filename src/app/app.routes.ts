import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MoveSpaceComponent} from "./components/move-space/move-space.component";

export const routes: Routes = [
//   {
//   path: 'space',
//   loadComponent: () =>
//     import('../app/components/move-space/move-space.component').then(c => c.MoveSpaceComponent)
// },
  {
    path: 'list',
    loadComponent: () =>
      import('../app/components/move-list/move-list.component').then(c => c.MoveListComponent)
  }, {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home.component').then(c => c.HomeComponent)
  },
  { path: '**', redirectTo: 'home' },
];
