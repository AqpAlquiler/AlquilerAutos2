import { Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { CatalogoComponent } from './vistas/catalogo/catalogo.component';


export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  }
];
