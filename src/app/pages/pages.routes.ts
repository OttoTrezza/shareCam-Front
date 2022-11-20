import { RouterModule, Routes, CanActivate } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { AdminGuard, VerificatokenGuard } from '../services/service.index';

// Mantenimientos
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';



const pagesRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [VerificatokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'dashboard', component: DashboardComponent, canActivate: [VerificatokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'mensajes', component: MensajesComponent, data: { titulo: 'Mensajes' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },

    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard],
        data: { titulo: 'mantenimiento de usuario' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'mantenimiento de hospital' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'mantenimiento de medico' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar medico' } },


    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
