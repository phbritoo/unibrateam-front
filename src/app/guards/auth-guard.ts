//Classe criada para fazer as ligções do login com as telas - So acessa as demais tela se estiver logado
import { AutenticacaoService } from '../login/autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router ){}

  // Define se o usuario esta logado ou nao
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if(this.autenticacaoService.usuarioEstaAutenticado()){
      return true;

    }  else{

      this.router.navigate(['/login']);
      return false;
    }

  }

}
