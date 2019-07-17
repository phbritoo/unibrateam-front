import { AutenticacaoService } from './login/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  mostrarMenu: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private autenticacaoService: AutenticacaoService) {

  }

  ngOnInit(){

    this.autenticacaoService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }

}
