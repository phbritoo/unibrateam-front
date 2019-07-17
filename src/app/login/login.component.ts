import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;

  loginControl = new FormControl('', [Validators.required]);

  usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {}

  fazerLogin(){
    this.autenticacaoService.fazerLogin(this.usuario);
  }
}
