import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {ClienteService} from '../../shared/services/cliente.service';


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos: Array<Pedido>;
  displayedColumns = ['nome', 'cpf', 'telefone', 'tamanho'];
  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
   this.clienteService.listar().subscribe(
     pedidos => this.pedidos = pedidos
   );
  }

}
