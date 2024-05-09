import { Component } from '@angular/core';

@Component({
  selector: 'app-conductores',
  standalone: true,
  imports: [],
  templateUrl: './conductores.component.html',
  styleUrl: './conductores.component.css'
})
export class ConductoresComponent {
  public conductores:{numero:string, piloto:string, puntos:string, nombrePiloto:string, bandera:string}[] = [
    {numero : "1", piloto : "maxver01", puntos:"136 PTS", nombrePiloto:"Max Verstappen", bandera:"Netherlands"},
    {numero : "11", piloto : "serper01", puntos:"103 PTS", nombrePiloto:"Sergio Perez", bandera:"Mexico"},
    {numero : "16", piloto : "chalec01", puntos:"98 PTS", nombrePiloto:"Charles Leclerc", bandera:"Monaco"},
    {numero : "4", piloto : "lannor01", puntos:"83 PTS", nombrePiloto:"Lando Norris", bandera:"United Kingdom"},
    {numero : "55", piloto : "carsai01", puntos:"83 PTS", nombrePiloto:"Carlos Sainz", bandera:"Spain"},
    {numero : "81", piloto : "oscpia01", puntos:"41 PTS", nombrePiloto:"Oscar Piastri", bandera:"Australia"},
    {numero : "63", piloto : "georus01", puntos:"37 PTS", nombrePiloto:"George Russell", bandera:"United Kingdom"},
    {numero : "14", piloto : "feralo01", puntos:"33 PTS", nombrePiloto:"Fernando Alonso", bandera:"Spain"},
    {numero : "44", piloto : "lewham01", puntos:"27 PTS", nombrePiloto:"Lewis Hamilton", bandera:"United Kingdom"},
    {numero : "22", piloto : "yuktsu01", puntos:"14 PTS", nombrePiloto:"Yuki Tsunoda", bandera:"Japan"},
    {numero : "18", piloto : "lanstr01", puntos:"9 PTS", nombrePiloto:"Lance Stroll", bandera:"Canada"},
    {numero : "38", piloto : "olibea01", puntos:"6 PTS", nombrePiloto:"Oliver Berman", bandera:"United Kingdom"},
    {numero : "27", piloto : "nichul01", puntos:"6 PTS", nombrePiloto:"Nico Hulkenberg", bandera:"Germany"},
    {numero : "3", piloto : "danric01", puntos:"5 PTS", nombrePiloto:"Daniel Ricciardo", bandera:"Australia"},
    {numero : "31", piloto : "estoco01", puntos:"1 PTS", nombrePiloto:"Esteban Ocon", bandera:"France"},
    {numero : "20", piloto : "kevmag01", puntos:"1 PTS", nombrePiloto:"Kevin Magnussen", bandera:"Denmark"},
    {numero : "23", piloto : "alealb01", puntos:"0 PTS", nombrePiloto:"Alexander Albon", bandera:"Thailand"},
    {numero : "24", piloto : "guazho01", puntos:"0 PTS", nombrePiloto:"Zhou Guanyu", bandera:"China"},
    {numero : "10", piloto : "piegas01", puntos:"0 PTS", nombrePiloto:"Pierre Gasly", bandera:"France"},
    {numero : "77", piloto : "valbot01", puntos:"0 PTS", nombrePiloto:"Valtteri Bottas", bandera:"Finland"},
    {numero : "2", piloto : "logsar01", puntos:"0 PTS", nombrePiloto:"Logan Sargeant", bandera:"United States"},
    ]
}
