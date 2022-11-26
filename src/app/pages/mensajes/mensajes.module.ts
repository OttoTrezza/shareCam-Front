import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajesComponent } from './mensajes.component';
import { CameraComponent } from 'src/app/camera/camera/camera.component';



@NgModule({
  declarations: [
    MensajesComponent,
    CameraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MensajesModule { }
