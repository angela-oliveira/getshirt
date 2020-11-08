import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {PedidoService} from '../../shared/services/pedido.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos: Array<Pedido>;
  displayedColumns = ['nome' , 'cpf' , 'telefone' , 'tamanho'];

  constructor(private pedidoService: PedidoService, private roteador: Router) {

  }

  ngOnInit(): void {
   this.pedidoService.listar().subscribe(
     pedidos => this.pedidos = pedidos
   );
  }


  editar(pedido: Pedido): void {
    this.roteador.navigate(['cadastrarpedido', pedido.id]);
  }

  remover(pedido: Pedido): void {
    this.pedidoService.remover(pedido.id).subscribe(
      resposta => {
        const indxPedidoARemover = this.pedidos.findIndex(p => p.cpf === pedido.cpf);
        if (indxPedidoARemover > -1) {
          this.pedidos.splice(indxPedidoARemover, 1);
          this.roteador.navigate(['listarpedido']);
          console.log('Removido com sucesso');
        }
      }
    );

  }

}
