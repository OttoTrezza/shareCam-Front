import { Component, OnInit } from '@angular/core';

import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit{

usuario: Usuario;
public menu: any;
  constructor(
    public _sidebar: SidebarService,
    public usuarioService: UsuarioService
    ) { 
      this.usuario = this.usuarioService.usuario;
      this.menu = this._sidebar.cargarMenu() ;
    }

  ngOnInit() {    
    this.usuarioService.cargarStorage();
    this.menu = JSON.parse( localStorage.getItem('menu'));
    console.log('this.menu',this.menu, this.usuario);
  }
  
  logout() {
    this.usuarioService.logout()
  }

}
