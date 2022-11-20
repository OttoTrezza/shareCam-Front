import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicoService, HospitalService } from '../../services/service.index';
import { Hospital } from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];
  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor(
    public _medicoService: MedicoService,
    public _hospitalService: HospitalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id !== 'nuevo') {
        this.cargarMedicoid( id );
      }
    });
  }

  ngOnInit() {
    this._hospitalService.cargarHospitales()
          .subscribe( (resp: any) => this.hospitales = resp.hospitales);

          
  }


  guardarMedico(f: NgForm) {
    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }
    this._medicoService.guardarMedico( this.medico )
          .subscribe( medico => {
            this.medico._id = medico._id;
            this.router.navigate(['/*/medico', medico._id]);
          });

  }
  cambioHospital( id: string ) {
  this._hospitalService.obtenerHospital( id )
      .subscribe( (hospital: any) => this.hospital = hospital );
    }


  cargarMedicoid( id: string ) {
    this._medicoService.cargarMedicoid( id )
          .subscribe( medico => {
            console.log(medico);
            this.medico = medico;
            this.medico.hospital = medico.hospital._id;
            this.cambioHospital( this.medico.hospital);
          });
  }

  cambiarFoto() {
  }
}
