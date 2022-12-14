import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

// import swal from 'sweetalert';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[] = [];
  desde: number = 0;

  salas: any;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
          // .subscribe( resp => this.cargarUsuarios() );

  }


  cargarUsuarios() {
    this._usuarioService.cargarUsuarios()
          .subscribe( (resp: any) => {
          this.totalRegistros = resp.total;
          this.usuarios = resp.usuarios;
          this.cargando = false;
          console.log('this.usuarios',this.usuarios);
    });
  }


  buscarUsuario( termino: string) {
    if ( termino.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;

    this._usuarioService.buscarUsuarios( termino )
              .subscribe((usuarios: Usuario[]) => {
                this.usuarios = usuarios;
                this.cargando = false;
              });
  }


  guardarUsuario( usuario: Usuario) {
      this._usuarioService.actualizarUsuario( usuario )
            .subscribe();
  }


  borrarUsuario( usuario: Usuario) {
    if ( usuario._id === this._usuarioService.usuario._id) {
      // swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }
    //  swal(
    //  '¿Esta seguro?',
    // 'Esta a punto de borrar a ' + usuario.nombre,
    // 'warning'
    // // buttons: true,
    // //   dangerMode: true
    // )
    // .then (borrar => {
    //   console.log( borrar );
    //   if ( borrar ) {
    //   this._usuarioService.borrarUsuario( usuario._id)
    //         .subscribe( borrado => {
    //           console.log( borrado );
    //           this.cargarUsuarios();
    //         });
    //   }
    // });
  }



  mostrarModal( id: string) {
  }



  cambiarDesde(valor: number ) {

    let desdeu = JSON.parse( localStorage.getItem('desdeu')) + valor;

    if ( desdeu >= this.totalRegistros) {
      return;
    }
    if (desdeu < 0) {
      return;
    }

    this._usuarioService.guardardesdeStorage( desdeu );
    this.cargarUsuarios();
  }

}
