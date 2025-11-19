import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
}

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-reserva',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaComponent {
  vehiculos: Vehiculo[] = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Hyundai', modelo: 'Tucson' },
    { id: 3, marca: 'Kia', modelo: 'Sportage' }
  ];

  reserva = {
    vehiculoId: null as number | null,
    fechaInicio: '',
    fechaFin: '',
    kilometraje: null as number | null,
    seguro: 'ninguno',
    comentarios: ''
  };

  cancelarReserva() {
  // Redirigir al catálogo o página anterior
  window.history.back(); // simple y rápido
  // O usar el Router de Angular:
  // this.router.navigate(['/catalogo']);
}

  reservarVehiculo() {
    console.log('Datos de la reserva:', this.reserva);
    // Aquí puedes llamar a un servicio para enviar al backend
  }
}
