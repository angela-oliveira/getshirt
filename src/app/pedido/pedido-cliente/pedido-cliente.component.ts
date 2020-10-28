import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {ClienteService} from '../../shared/services/cliente.service';


@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.scss']
})
export class PedidoClienteComponent implements OnInit {

  pedido: Pedido;
  pedidos: Array<Pedido>;

  constructor(private clienteService: ClienteService) {
    this.pedido = new Pedido();
  }
  inserirPedidos(): void{
    this.clienteService.inserir(this.pedido).subscribe(
      pedido => console.log(pedido)
    );
    this.pedido = new Pedido();
  }
  ngOnInit(): void {
  }

}
