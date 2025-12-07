import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilService } from '../../servicios/perfil.service';

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  cliente: any = {};
  reservas: any[] = [];
  pagos: any[] = [];
  clienteId: number = 1;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.cargarPerfil();
    this.cargarReservas();
    this.cargarPagos();
  }

  cargarPerfil(): void {
    this.perfilService.getClientePorId(this.clienteId)
      .subscribe({
        next: data => this.cliente = data,
        error: err => console.error('Error cargando cliente', err)
      });
  }

  cargarReservas(): void {
    this.perfilService.getReservasCliente(this.clienteId)
      .subscribe({
        next: data => this.reservas = data,
        error: err => console.error('Error cargando reservas', err)
      });
  }

  cargarPagos(): void {
    this.perfilService.getPagosCliente(this.clienteId)
      .subscribe({
        next: data => this.pagos = data,
        error: err => console.error('Error cargando pagos', err)
      });
  }

  verReserva(reserva: any): void {
    // Lógica para ver reserva en detalle
    console.log('Reserva seleccionada:', reserva);
  }

  cancelarReserva(reserva: any): void {
    // Lógica para cancelar reserva
    console.log('Cancelar reserva:', reserva);
  }
}
