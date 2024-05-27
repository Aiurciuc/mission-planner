import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./feature/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'planner',
    title: 'Planner',
    loadComponent: () =>
      import('./feature/planner/planner.component').then(
        (m) => m.PlannerComponent
      ),
  },
  {
    path: 'player',
    title: 'Player',
    loadComponent: () =>
      import('./feature/player/player.component').then(
        (m) => m.PlayerComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
