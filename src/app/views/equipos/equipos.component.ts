import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent {
  public teams:{coche:string, logo:string, nombreLogo:string, posicion:string, puntos:string, piloto:string, nombrePiloto:string, nombrePiloto1:string, piloto1:string}[] = [
    {coche : "Red_Bull", logo:"redBull", nombreLogo: "Red Bull", posicion:"1", puntos:"239 PTS", piloto:"S.P", nombrePiloto:"Perez", nombrePiloto1:"Verstappen", piloto1:"M.V"},
    {coche : "Ferrari", logo:"Ferrari", nombreLogo: "Ferrari", posicion:"2", puntos:"187 PTS", piloto:"C.L", nombrePiloto:"Leclerc", nombrePiloto1:"Sainz", piloto1:"C.S"},
  ]
}
