//* Rutas generale del proyecto
//Configuración basica de las rutas
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    //Hace referencia cuando se coloca una url  equivoda
    path: 'auth',
    loadChildren: () => import('@auth/auth.routes').then((m) => m.authRoutes),
    //Esta es la estructura principal del loadChildren
    /*loadChildren: () => import('@auth/auth.routes').then((m) => m.authRoutes), Pero para ello hay que configurar el path en tsconfig.ts
    y dentro de ello hay que configurar las rutas en path*/
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@zoopedia/zoopedia.routes').then((m) => m.zoopediaRoutes),
  },
  {
    path: '404',
    loadComponent: () =>
      import('@shared/pages').then((m) => m.Error404Component),
  },
  {
    //Si la path es vacia enviiar a dashboard
    //patMatch FUll para que no llame otras rutas y llame exactamente lo que llama
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    //Redireción si hay rutas herroneas
    path: '**',
    redirectTo: '404',
  },
];
