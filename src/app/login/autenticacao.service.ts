import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
   usuarioAutenticado: boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  showSpinner: boolean;

  fazerLogin(usuario: Usuario){
    if(usuario.login === 'admin' && usuario.senha === 'admin'){

      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate(['/homePage']);

    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false);
      alert("Usuario ou senha invalido!");
    }
  }

  // Metodo para levar para a pasta de guardas
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
