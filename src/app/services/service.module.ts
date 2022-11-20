import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  AdminGuard,
  VerificatokenGuard,
  HospitalService,
  MedicoService,
  WebsocketService,
  ChatService
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    VerificatokenGuard,
    HospitalService,
    MedicoService,
    ChatService,
    WebsocketService
  ],
  declarations: []
})
export class ServiceModule { }
