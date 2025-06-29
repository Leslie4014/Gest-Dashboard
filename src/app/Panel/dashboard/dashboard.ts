import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  seleccionarApartado(nombre: string) {
    console.log('Sección seleccionada:', nombre);
    // navegar con el Router o mostrar contenido dinámico
  }
}