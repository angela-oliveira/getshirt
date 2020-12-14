import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Pedido} from '../model/pedido';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PedidoFirestoreService {


  colecaoPedidos: AngularFirestoreCollection<Pedido>;
  NOME_COLECAO = 'Pedidos';

  constructor(private afs: AngularFirestore) {
    this.colecaoPedidos = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Pedido[]> {
    return this.colecaoPedidos.valueChanges({idField: 'id'});
  }

  inserir(pedido: Pedido): Observable<object> {
    delete pedido.idPedido;
    return from(this.colecaoPedidos.add(Object.assign({}, pedido)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoPedidos.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Pedido> {
    return this.colecaoPedidos.doc(id).get().pipe(map(document => new Pedido(document.id, document.data())));
  }

  atualizar(pedido: Pedido): Observable<void> {
    delete pedido.idPedido;
    return from(this.colecaoPedidos.doc(pedido.idPedido).update(Object.assign({}, pedido)));
  }}
