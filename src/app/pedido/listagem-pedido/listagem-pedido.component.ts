import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {PedidoService} from '../../shared/services/pedido.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  dataSource: MatTableDataSource<Pedido>;
  mostrarColunas = ['nome', 'telefone', 'tamanho', 'acoes'];
  private id: number;




  constructor(private pedidoService: PedidoService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.pedidoService.listar().subscribe(
      pedidos => this.dataSource = new MatTableDataSource(pedidos)
    );
  }

  editar(pedido: Pedido): void {
    this.roteador.navigate(['cadastrarpedido', pedido.id]);
  }

  remover(pedido: Pedido): void {
    this.pedidoService.remover(pedido.id).subscribe(
      resposta => {
        const indxPedidoARemover = this.dataSource.data.findIndex(p => p.cpf === pedido.cpf);
        if (indxPedidoARemover > -1) {
          this.dataSource.data.splice(indxPedidoARemover, 1);
          this.roteador.navigate(['listarpedido']);
          console.log('Removido com sucesso');
        }
      }
    );

  }

}
