import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }
}
