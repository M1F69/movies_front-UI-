import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('../app/components/move-list/move-list.component').then(c=>c.MoveListComponent)
  }
];
