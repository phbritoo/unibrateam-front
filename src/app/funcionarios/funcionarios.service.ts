import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  //readonly - variavel que nao pode ser alterada
  private readonly API = 'http://localhost:8080/funcionarios'

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return this.http.get<Funcionario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
