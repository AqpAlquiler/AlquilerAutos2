
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { CatalogoComponent } from './vistas/catalogo/catalogo.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { ReservaComponent } from './vistas/reserva-form/reserva-form.component';
import { DevolucionesComponent } from './vistas/devoluciones/devoluciones.component';
import { DashboardLayoutComponent } from './vistas/dashboard-layout/dashboard-layout.component';
import { NuevoAlquilerComponent } from './vistas/nuevo-alquiler/nuevo-alquiler.component';
import { ListaAlquileresComponent } from './vistas/lista-alquileres/lista-alquileres.component';
import { DashboardProgramComponent } from './vistas/dashboard-program/dashboard-program.component';  
import { GestionPagosComponent } from './vistas/gestion-pagos/gestion-pagos.component';






export const routes: Routes = [
{
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: InicioComponent }, // / → Bienvenida simple
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'reserva', component: ReservaComponent }
    ]
  },

  // ✅ Layout dashboard
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: 'devoluciones', component: DevolucionesComponent },
      { path: 'nuevo-alquiler', component: NuevoAlquilerComponent },
      { path: 'lista-alquileres', component: ListaAlquileresComponent },
      { path: 'dashboard-program', component: DashboardProgramComponent },
      { path: 'gestion-pagos', component: GestionPagosComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

