import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat/Subscription';
import { Usuario } from 'src/app/models/usuario.model';
import { ChatService } from 'src/app/services/service.index';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
salas: any;
salasActivas: []=[];
usuarios: Usuario[];
usuariosActivosSubscription: Subscription;
salasSubscription: Subscription;
  constructor(
    public _chatService: ChatService
  ) {  }

  ngOnInit(): void {
    this.usuariosActivosSubscription = this._chatService.getUsuariosActivos()
          .subscribe( (respu: Usuario[]= []) => {
            this.usuarios = respu;
            console.log('usuarios en mens.comp', this.usuarios);
          } );

    this.salasSubscription = this._chatService.getSalas()
    .subscribe( (respu: any) => {
      this.salas = respu;
      console.log('usuarios en mens.comp', this.salas);
    } );
    
  }

}
