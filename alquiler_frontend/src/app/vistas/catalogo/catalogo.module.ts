import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogoComponent } from './catalogo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    FormsModule,       // necesario para [(ngModel)]
    RouterModule
  ],
  exports: [CatalogoComponent]
})
export class CatalogoModule {}
