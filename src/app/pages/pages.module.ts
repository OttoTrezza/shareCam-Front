
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';

// pipes
import { PipesModule } from '../pipes/pipes.module';

import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ChatComponent } from '../components/chat/chat.component';
import { AutoOTTOChatComponent } from '../components/chat/auto-otto.component';





@NgModule({
    declarations: [
        DashboardComponent,
        AccoutSettingsComponent,
        UsuariosComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        MensajesComponent,
        ChatComponent,
        BusquedaComponent

    ],
    exports: [
        DashboardComponent,
        ChatComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        ChartsModule
    ]
})
export class PagesModule { }
