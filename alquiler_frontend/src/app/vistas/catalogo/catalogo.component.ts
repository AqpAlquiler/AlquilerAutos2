import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  marcas = ['Toyota', 'Hyundai', 'Kia', 'Nissan'];
  anios = [2025, 2024, 2023, 2022];
  tipos = ['Sedan', 'SUV', 'Hatchback', 'Camioneta'];

  filtro = {
    marca: '',
    anio: '',
    tipo: '',
    precioMin: '',
    precioMax: ''
  };

  vehiculos = [
    { marca: 'Toyota', modelo: 'Corolla', anio: 2022, precioDia: 150, imagen: 'corolla.jpg' },
    { marca: 'Hyundai', modelo: 'Tucson', anio: 2023, precioDia: 220, imagen: 'tucson.jpg' }
  ];

  filtrar() {
    console.log('Aplicando filtros...', this.filtro);
  }

  limpiar() {
    this.filtro = { marca: '', anio: '', tipo: '', precioMin: '', precioMax: '' };
  }

  verDetalles(v: any) {
    console.log('Detalles:', v);
  }

  reservar(v: any) {
    console.log('Reservar:', v);
  }
}
