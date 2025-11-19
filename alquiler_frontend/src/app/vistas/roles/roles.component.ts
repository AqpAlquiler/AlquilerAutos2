import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
    listaUsuarios = [
    { id_usuario: 'USR01', username: 'edu', rol: 'ADMIN', estado: 'ACTIVO', nuevoRol: null },
    { id_usuario: 'USR02', username: 'juan', rol: 'CLIENTE', estado: 'INACTIVO', nuevoRol: null },
  ];

  listaRoles = [
    { id_rol: 1, nombre_rol: 'ADMIN' },
    { id_rol: 2, nombre_rol: 'EMPLEADO' },
    { id_rol: 3, nombre_rol: 'CLIENTE' }
  ];

  asignarRol(usuario: any) {
    console.log('Asignando nuevo rol:', usuario);
    alert(`Rol actualizado para ${usuario.username} → Rol: ${usuario.nuevoRol}`);
  }

}
