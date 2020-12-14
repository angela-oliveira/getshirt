import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pedido} from '../../shared/model/pedido';
import {PedidoService} from '../../shared/services/pedido.service';
import {PedidoFirestoreService} from '../../shared/services/pedido-firestore.service';


@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.scss']
})
export class CadastrarPedidoComponent implements OnInit {

  pedido: Pedido;
  pedidos: Array<Pedido>;
  operacaoCadastro = true;

  constructor(private pedidoService: PedidoService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.pedido = new Pedido();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotalAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.pedidoService.pesquisarPorId(idParaEdicao).subscribe(
        pedidoRetornado => this.pedido = pedidoRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirPedido(): void {
    if (this.pedido.idPedido) {
      this.pedidoService.atualizar(this.pedido).subscribe(
        pedidoAlterado => {
          console.log(pedidoAlterado);
          this.roteador.navigate(['listarpedido']);
        }
      );
    } else {
      this.pedidoService.inserir(this.pedido).subscribe(
        pedidoInserido => {
          console.log(pedidoInserido);
          this.roteador.navigate(['listarpedido']);
        }
      );
    }
  }

}


