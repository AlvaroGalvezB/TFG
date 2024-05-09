import { Component } from '@angular/core';

@Component({
  selector: 'app-circuitos',
  standalone: true,
  imports: [],
  templateUrl: './circuitos.component.html',
  styleUrl: './circuitos.component.css'
})
export class CircuitosComponent {
  public circuitos:{circuito:string, fecha:string, nombre:string, bandera:string}[] = [
    {circuito : "Bahrain", fecha : "29-02 FEB-MAR", nombre:"Bahrain", bandera:"Bahrain"},
    {circuito : "Jeddah", fecha : "07-09 MAR", nombre:"Saudi Arabia", bandera:"Saudi_Arabia"},
    {circuito : "Melbourne", fecha : "22-24 MAR", nombre:"Australia", bandera:"Australia"},
    {circuito : "Suzuka", fecha : "05-07 APR", nombre:"Japan", bandera:"Japan"},
    {circuito : "Shanghai", fecha : "19-21 APR", nombre:"China", bandera:"China"},
    {circuito : "Miami", fecha : "03-05 MAY", nombre:"Miami", bandera:"United_States"},
    {circuito : "Emilia-Romagna", fecha : "17-19 MAY", nombre:"Emilia-Romagna", bandera:"Italy"},
    {circuito : "Monaco", fecha : "24-26 MAY", nombre:"Monaco", bandera:"Monaco"},
    {circuito : "Canada", fecha : "07-09 JUN", nombre:"Canada", bandera:"Canada"},
    {circuito : "Spain", fecha : "21-23 JUN", nombre:"España", bandera:"Spain"},
    {circuito : "Austria", fecha : "28-30 JUN", nombre:"Austria", bandera:"Austria"},
    {circuito : "Great_Britain", fecha : "05-07 JUL", nombre:"Gran Bretaña", bandera:"Great_Britain"},
    {circuito : "Hungary", fecha : "19-21 JUL", nombre:"Hungria", bandera:"Hungary"},
    {circuito : "Belgium", fecha : "26-28 JUL", nombre:"Belgica", bandera:"Belgium"},
    {circuito : "Netherlands", fecha : "23-25 AUG", nombre:"Paises Bajos", bandera:"Netherlands"},
    {circuito : "Italy", fecha : "30-01 AUG-SEP", nombre:"Italia", bandera:"Italy"},
    {circuito : "Azerbaijan", fecha : "13-15 SEP", nombre:"Azerbaijan", bandera:"Azerbaijan"},
    {circuito : "Singapore", fecha : "20-22 SEP", nombre:"Singapur", bandera:"Singapore"},
    {circuito : "United_States", fecha : "18-20 OCT", nombre:"Estados Unidos", bandera:"United_States"},
    {circuito : "Mexico", fecha : "25-27 OCT", nombre:"Mexico", bandera:"Mexico"},
    {circuito : "Brazil", fecha : "01-03 NOV", nombre:"Brasil", bandera:"Brazil"},
    {circuito : "Las_Vegas", fecha : "21-23 NOV", nombre:"Las Vegas", bandera:"United_States"},
    {circuito : "Qatar", fecha : "29-01 NOV-DEC", nombre:"Qatar", bandera:"Qatar"},
    {circuito : "Abu_Dhabi", fecha : "06-08 DEC", nombre:"Abu Dhabi", bandera:"Abu_Dhabi"},
    ]
}
