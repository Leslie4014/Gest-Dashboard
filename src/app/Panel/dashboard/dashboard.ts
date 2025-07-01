import { Component } from '@angular/core';
import { BotonesEmpresaComponent } from './botones-empresa/botones-empresa';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BotonesEmpresaComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  seleccionarApartado(nombre: string) {
    console.log('Sección seleccionada:', nombre);
  }
}
