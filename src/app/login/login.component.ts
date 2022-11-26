import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
 // import { ChatService } from '../services/service.index';
// import { WebsocketService } from '../services/websocket/websocket.service';


declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;
  invitado: boolean = false;
  auth2: any;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
    // public _chatService: ChatService,
    // public _wsService: WebsocketService
  ) { }

  ngOnInit() {
    init_plugins();

   
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1) {
      this.recuerdame = true;
    }
  }

attachSignin( element ) {

}

  ingresar(forma: NgForm) {
    if ( forma.invalid) {
      return;
    }else{ 
     this._usuarioService.login(forma.value, forma.value.recuerdame)
     .subscribe( correcto => this.router.navigate(['/*/dashboard']) );
      }
    }
}
