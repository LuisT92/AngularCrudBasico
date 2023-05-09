import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  listaUsuarios: any = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios();
  }

  usuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.listaUsuarios = res;
      },
      err => console.log(err)
    );
  }

}
