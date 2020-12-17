import { Injectable } from '@angular/core';
import {Empresa} from '../model/Empresa';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  URL_EMPRESAS =  'http://localhost:5051/empresas';
  empresas: Array<Empresa>;

  constructor(private httpClient: HttpClient) {

  }
  listar(): Observable<Empresa[]>{
    return  this.httpClient.get<Empresa[]>( this.URL_EMPRESAS );
  }

  inserir(empresa: Empresa): Observable<Empresa>{
    return this.httpClient.post<Empresa>(this.URL_EMPRESAS, empresa);
  }
  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_EMPRESAS}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Empresa> {
    return this.httpClient.get<Empresa>(`${this.URL_EMPRESAS}/${id}`);
  }

  login(email: string, senha: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_EMPRESAS}/${email}/${senha}`);
  }

  atualizar(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(`${this.URL_EMPRESAS}/${empresa.idEmpresa}`, empresa);
  }
}
