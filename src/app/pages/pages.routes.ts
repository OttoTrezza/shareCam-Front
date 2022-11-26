import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { AdminGuard, VerificatokenGuard } from '../services/service.index';

// Mantenimientos
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ProfileComponent } from './profile/profile.component';
import { SalasComponent } from './salas/salas.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';



const pagesRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [VerificatokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'dashboard', component: DashboardComponent, canActivate: [VerificatokenGuard], data: { titulo: 'Dashboard' } },
    { path: 'mensajes', component: MensajesComponent, data: { titulo: 'Mensajes' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'perfiles', component: ProfileComponent, data: { titulo: 'Perfil' } },
    { path: 'salas', component: SalasComponent, data: { titulo: 'salas' } },
    { path: 'dispositivos', component: DispositivosComponent, data: { titulo: 'dispositivos' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard],
        data: { titulo: 'mantenimiento de usuario' }
    },


    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
