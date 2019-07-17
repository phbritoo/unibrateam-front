import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, take } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json',
  'Authorization': 'my-auth-token'})
};

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //readonly - variavel que nao pode ser alterada
  private readonly API = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }


  // getClientes(): Observable<Cliente[]> {
  //   return this.http.get<Cliente[]>(this.API)
  //   .pipe(
  //     tap(console.log)
  //   );
  // }

  // setCliente(cliente: Cliente) {
  //   return this.http.post(this.API, cliente);
  // }

  // deleteCliente(cli_id): Observable<Cliente> {
  //   const url = `${this.API}/${cli_id}`;

  //   return this.http.delete<Cliente>(url, httpOption).pipe(
  //     tap(_ => console.log(`remove o Cliente com id=${cli_id}`)),
  //     catchError(this.handleError<Cliente>('deleteCliente'))
  //   );
  // }

  // deleteCliente (cli_id): Observable<Cliente> {
  //   const url = `${this.API}/${cli_id}`;

  //   return this.http.delete<Cliente>(url, httpOptions).pipe(
  //     tap(_ => console.log(`remove o Cliente com id=${cli_id}`)),
  //     catchError(this.handleError<Cliente>('deleteCliente'))
  //   );
  // }
  getClientes (): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API)
      .pipe(
        tap(Clientes => console.log('leu os Clientes')),
        catchError(this.handleError('getClientes', []))
      );
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente, httpOptions)
      .pipe(
        catchError(this.handleError('addCliente', cliente))
      );
  }
  // addCliente(cliente): Observable<Cliente> {
  //   console.log(cliente);
  //   return this.http.post<Cliente>(this.API2 + 'cliente', JSON.stringify(cliente), httpOptions).pipe(
  //     tap((cliente) => console.log('added cliente w/ id=${cliente.id}')),
  //     catchError(this.handleError<Cliente>('addProduct'))
  //   );
  // }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  // getCliente(cli_id: number): Observable<Cliente> {
  //   const url = '${this.API}/${cli_id}';
  //   return this.http.get<Cliente>(url).pipe(
  //     tap(_ => console.log(`leu o Cliente id=${cli_id}`)),
  //     catchError(this.handleError<Cliente>(`getCliente id=${cli_id}`))
  //   );
  // }


  // addCliente (cliente): Observable<Cliente> {
  //   return this.http.post<Cliente>(this.API2, cliente, httpOptions).pipe(
  //     // tslint:disable-next-line:no-shadowed-variable
  //     tap((cliente: Cliente) => console.log(`adicionou o cliente com w/ id=${cliente.cli_id}`)),
  //     catchError(this.handleError<Cliente>('addCliente'))
  //   );
  // }

  // updateCliente(cli_id, cliente): Observable<any> {
  //   const url = '${this.API}/${cli_id}';
  //   return this.http.put(url, cliente, httpOptions).pipe(
  //     tap(_ => console.log(`atualiza o cliente com id=${cli_id}`)),
  //     catchError(this.handleError<any>('updateCliente'))
  //   );
  // }

  deleteCliente (cli_id){
    // const url = '${this.API}/${id}';
    return this.http.delete<Cliente>('${this.API}/${cli_id}', httpOptions).pipe(
      take(1)
      // tap(_ => console.log(`remove o cliente com id=${cli_id}`)),
      // catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }


}
