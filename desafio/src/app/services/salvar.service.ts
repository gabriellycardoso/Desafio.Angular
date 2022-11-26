import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { CriarConta } from '../models/criar-conta.model';

@Injectable({
  providedIn: 'root'
})
export class SalvarService {
  private listaClient: any[];
  private url = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {
    this.listaClient = [];
  }

  lerClientes(): Observable<CriarConta[]> {
    return this.httpClient.get<CriarConta[]>(this.url);
  }
  excluirCliente(usuarioId: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${usuarioId}`);
  }
  salvarCliente(cliente: CriarConta): Observable<CriarConta[]> {
    return this.httpClient.post<CriarConta[]>(this.url,cliente);
  }
  editarUsuario(usuario:CriarConta):Observable<CriarConta[]>{
    return this.httpClient.put<CriarConta[]>(`${this.url}/${usuario.id}`,usuario);
   }

  }


