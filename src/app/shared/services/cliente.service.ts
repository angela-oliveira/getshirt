import { Injectable } from '@angular/core';
import {PEDIDOS} from '../model/PEDIDOS';
import {Pedido} from '../model/pedido';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL_CLIENTES =  'http://localhost:3000/pedidos';
  pedidos: Array<Pedido>;

  constructor(private httpClient: HttpClient) {

  }
  listar(): Observable<Pedido[]>{
    return  this.httpClient.get<Pedido[]>( this.URL_CLIENTES );
  }

  inserir(pedido: Pedido): Observable<Pedido>{
    return this.httpClient.post<Pedido>(this.URL_CLIENTES, pedido);
  }
}
