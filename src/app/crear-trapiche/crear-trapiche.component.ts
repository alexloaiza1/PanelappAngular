import { Component } from '@angular/core';

import { TrapicheService, TrapicheDto } from '../trapiche.service';

@Component({
  selector: 'app-crear-trapiche',
  standalone: true,
  imports: [],
  templateUrl: './crear-trapiche.component.html',
  styleUrl: './crear-trapiche.component.css',
})
export class CrearTrapicheComponent {
  trapiche: TrapicheDto = {
    id: 0,
    nombre: '',
    direccion: '',
    telefono: '',
  };

  constructor(private trapicheService: TrapicheService) {}

  crearTrapiche() {
    this.trapicheService.crearTrapiche(this.trapiche).subscribe(
      (response) => {
        console.log('Trapiche creado:', response);
        // Manejar la respuesta, mostrar un mensaje, etc.
      },
      (error) => {
        if (error.status === 409) {
          console.error('Conflicto:', error.error.mensaje);
          // Manejar el conflicto (ID existente)
        } else if (error.status === 400) {
          console.error('Solicitud incorrecta:', error.error.mensaje);
          // Manejar el error de solicitud
        } else {
          console.error('Error inesperado:', error);
          // Manejar errores inesperados
        }
      }
    );
  }
}
