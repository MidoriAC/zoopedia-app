import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
/*
Las rutas son arreglos y simpre llevanm un objeto dentro
import { Routes } from "@angular/router";
export const authRoutes: Routes = []
*/

export const authRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@auth/login-page.component').then(
            (m) => m.LoginPageComponent
          ),
      },
      {
        path: 'new-account',
        loadComponent: () =>
          import('@auth/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];
