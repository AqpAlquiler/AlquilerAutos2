import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VehiculoService } from '../vehiculo/vehiculo.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    RouterModule
  ]
})
export class VehiculoFormComponent implements OnInit {

  vehiculoForm!: FormGroup;
  id!: number | null;
  titulo = "Registrar Vehículo";
  imagenSeleccionada: File | null = null;
  imagenActual: string | null = null;
  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.vehiculoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', [Validators.required]],
      placa: ['', Validators.required],
      precioDia: ['', Validators.required],
      disponible: [true, Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.titulo = "Editar Vehículo";
      this.vehiculoService.getVehiculoById(this.id).subscribe(data => {

        this.vehiculoForm.patchValue(data);
        this.imagenActual = data.imagen;
      });
    }
  }

  seleccionarImagen(event: any): void {
    this.imagenSeleccionada = event.target.files[0];
  }

  guardar(): void {
    const formData = new FormData();
    formData.append('vehiculo', new Blob([JSON.stringify(this.vehiculoForm.value)], { type: 'application/json' }));

    if (this.imagenSeleccionada) {
      formData.append('imagenFile', this.imagenSeleccionada);
    }

    if (this.id) {
      this.vehiculoService.actualizarVehiculo(this.id, formData)
        .subscribe(() => this.router.navigate(['/vehiculos']));
    } else {
      this.vehiculoService.crearVehiculo(formData)
        .subscribe(() => this.router.navigate(['/vehiculos']));
    }
  }
}
