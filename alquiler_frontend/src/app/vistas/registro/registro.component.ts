import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private router: Router) {}

  cliente = {
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    email: '',
    direccion: ''
  };

  registrarCliente() {
    console.log('Cliente registrado:');
    console.log(this.cliente);

    this.router.navigate(['/inicio']);
  }

  goToRegresar() {
    console.log('Ir a login');
    this.router.navigate(['/login']);
  }
}

