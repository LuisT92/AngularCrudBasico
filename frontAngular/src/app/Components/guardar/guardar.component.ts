import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/modelo/usuario.model';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  usuarioNuevo: Usuario = {id: '', nombre: '', apellido: '', email: '', telefono: ''};
  mensajeError: string = '';

  constructor(private usuarioServices: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario(){

    if (!this.usuarioNuevo.telefono || this.usuarioNuevo.telefono.length !== 10) {
      console.log('Teléfono inválido');
      this.mensajeError = 'Teléfono inválido';
      return; // Sale de la función si el teléfono es inválido
    }

    if (!this.usuarioNuevo.email || !this.usuarioNuevo.email.includes('@')) {
      console.log('Correo electrónico inválido');
      this.mensajeError = 'Correo electrónico inválido';
      return; // Sale de la función si el correo electrónico es inválido
    }

    this.usuarioServices.guardarUsuario(this.usuarioNuevo).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}

