import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { ConductoresComponent } from './views/conductores/conductores.component';
import { CircuitosComponent } from './views/circuitos/circuitos.component';
import { EquiposComponent } from './views/equipos/equipos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'conductores', component: ConductoresComponent },
    { path: 'circuitos', component: CircuitosComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'politics', component: PoliticsComponent },
   
];
