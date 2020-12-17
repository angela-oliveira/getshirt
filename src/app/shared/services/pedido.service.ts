import { Injectable } from '@angular/core';
import {Pedido} from '../model/pedido';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  URL_PEDIDOS =  'http://localhost:5051/pedidos';
  pedidos: Array<Pedido>;

  constructor(private httpClient: HttpClient) {

  }
  listar(): Observable<Pedido[]>{
    return  this.httpClient.get<Pedido[]>( this.URL_PEDIDOS );
  }

  inserir(pedido: Pedido): Observable<Pedido>{
    return this.httpClient.post<Pedido>(this.URL_PEDIDOS, pedido);
  }
  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_PEDIDOS}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.URL_PEDIDOS}/${id}`);
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(`${this.URL_PEDIDOS}/${pedido.idPedido}`, pedido);
  }
}
