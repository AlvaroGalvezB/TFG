import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent {
  public teams:{equipo:string, puntos:string, piloto:string, nombrePiloto:string, nombrePiloto1:string, piloto1:string}[] = [
    {equipo : "Red Bull", puntos:"268 PTS", piloto:"S.P", nombrePiloto:"Perez", nombrePiloto1:"Verstappen", piloto1:"M.V"},
    {equipo : "Ferrari", puntos:"212 PTS", piloto:"C.L", nombrePiloto:"Leclerc", nombrePiloto1:"Sainz", piloto1:"C.S"},
    {equipo : "McLaren", puntos:"154 PTS", piloto:"L.N", nombrePiloto:"Norris", nombrePiloto1:"Piastri", piloto1:"O.P"},
    {equipo : "Mercedes", puntos:"79 PTS", piloto:"L.H", nombrePiloto:"Hamilton", nombrePiloto1:"Russell", piloto1:"G.R"},
    {equipo : "Aston Martin", puntos:"44 PTS", piloto:"Padre", nombrePiloto:"Alonso", nombrePiloto1:"Stroll", piloto1:"L.S"},
    {equipo : "RB", puntos:"20 PTS", piloto:"Y.T", nombrePiloto:"Tsunoda", nombrePiloto1:"Ricciardo", piloto1:"D.R"},
    {equipo : "Haas", puntos:"7 PTS", piloto:"N.H", nombrePiloto:"Hulkenberg", nombrePiloto1:"Magnussen", piloto1:"K.M"},
    {equipo : "Alpine", puntos:"1 PTS", piloto:"E.C", nombrePiloto:"Ocon", nombrePiloto1:"Gasly", piloto1:"P.G"},
    {equipo : "Williams", puntos:"0 PTS", piloto:"A.A", nombrePiloto:"Albon", nombrePiloto1:"Sargeant", piloto1:"Logan.S"},
    {equipo : "Kick Sauber", puntos:"0 PTS", piloto:"V.B", nombrePiloto:"Bottas", nombrePiloto1:"Zhou", piloto1:"Z.G"},
    ]
}
