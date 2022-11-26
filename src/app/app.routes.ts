import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { PagesComponent } from './pages/pages.component';
import { CameraComponent } from './camera/camera/camera.component';


const appRoutes: Routes = [

    { path: 'camera', component: CameraComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo:'/login', pathMatch: 'full' },
    { path: '*',
    component: PagesComponent,
    // canLoad:[LoginGuardGuard],
    canActivate: [LoginGuardGuard],
    loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NopagefoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
