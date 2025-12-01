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
    { marca: 'Toyota', modelo: 'Corolla', anio: 2022, precioDia: 150, imagen: '/images/corolla.jpg' },
    { marca: 'Hyundai', modelo: 'Tucson', anio: 2023, precioDia: 220, imagen: '/images/tucson.jpg' },
    { marca: 'Kia', modelo: 'Sportage', anio: 2022, precioDia: 180, imagen: '/images/sportage.jpg' },
    { marca: 'Nissan', modelo: 'Altima', anio: 2023, precioDia: 200, imagen: '/images/altima.jpg' },
    { marca: 'Toyota', modelo: 'RAV4', anio: 2024, precioDia: 250, imagen: '/images/rav4.jpg' },
    { marca: 'Hyundai', modelo: 'Santa Fe', anio: 2024, precioDia: 230, imagen: '/images/santafe.jpg' },
    { marca: 'Kia', modelo: 'Sorento', anio: 2025, precioDia: 270, imagen: '/images/sorento.jpg' },
    { marca: 'Nissan', modelo: 'Rogue', anio: 2023, precioDia: 210, imagen: '/images/rogue.jpg' },
    { marca: 'Toyota', modelo: 'Camry', anio: 2025, precioDia: 260, imagen: '/images/camry.jpg' },
    { marca: 'Hyundai', modelo: 'Elantra', anio: 2022, precioDia: 170, imagen: '/images/elantra.jpg' },
    { marca: 'Kia', modelo: 'Rio', anio: 2023, precioDia: 160, imagen: '/images/rio.jpg' },
    { marca: 'Nissan', modelo: 'Sentra', anio: 2022, precioDia: 155, imagen: '/images/sentra.jpg' },
    { marca: 'Toyota', modelo: 'Highlander', anio: 2024, precioDia: 280, imagen: '/images/highlander.jpg' },
    { marca: 'Hyundai', modelo: 'Kona', anio: 2023, precioDia: 190, imagen: '/images/kona.jpg' },
    { marca: 'Kia', modelo: 'Stinger', anio: 2025, precioDia: 300, imagen: '/images/stinger.jpg' }
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

