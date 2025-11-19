
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
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';





export const routes: Routes = [
  // 🌐 Público: landing + vistas independientes
  { path: '', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'login', component: LoginComponent }, // 👈 Aquí va

  // 🛠️ Dashboard (protegido)
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardProgramComponent }, // 👈 Ruta raíz
      { path: 'devoluciones', component: DevolucionesComponent },
      { path: 'nuevo-alquiler', component: NuevoAlquilerComponent },
      { path: 'lista-alquileres', component: ListaAlquileresComponent },
      { path: 'gestion-pagos', component: GestionPagosComponent }
    ]
  },
    { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

