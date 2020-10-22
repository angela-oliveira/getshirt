import { Component, OnInit } from '@angular/core';
import {PEDIDOS} from "../../shared/model/PEDIDOS";


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos = PEDIDOS;
  displayedColumns = ['nome', 'cpf', 'telefone', 'tamanho'];
  constructor() { }

  ngOnInit(): void {
  }

}
