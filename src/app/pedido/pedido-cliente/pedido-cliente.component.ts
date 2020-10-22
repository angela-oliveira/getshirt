import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {PEDIDOS} from '../../shared/model/PEDIDOS';


@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.scss']
})
export class PedidoClienteComponent implements OnInit {

  pedido: Pedido;
  pedidos: Array<Pedido>;

  constructor() {
    this.pedido = new Pedido();
    this.pedidos = PEDIDOS;
  }
  inserirPedidos(): void{
    this.pedidos.push(this.pedido);
    this.pedido = new Pedido();
  }
  ngOnInit(): void {
  }

}
