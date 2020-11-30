import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {PedidoService} from '../../shared/services/pedido.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {PedidoFirestoreService} from '../../shared/services/pedido-firestore.service';


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  dataSource: MatTableDataSource<Pedido>;
  mostrarColunas = ['nome', 'telefone', 'tamanho', 'acoes'];
  // private id: number;




  constructor(private pedidoFirestoreService: PedidoFirestoreService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.pedidoFirestoreService.listar().subscribe(
      pedidos => this.dataSource = new MatTableDataSource(pedidos)
    );
  }

  editar(pedido: Pedido): void {
    this.roteador.navigate(['cadastrarpedido', pedido.id]);
  }

  remover(pedido: Pedido): void {
    this.pedidoFirestoreService.remover(pedido.id).subscribe(
      resposta => {
          this.roteador.navigate(['listarpedido']);
          console.log('Removido com sucesso');
        }
    );

  }

}
