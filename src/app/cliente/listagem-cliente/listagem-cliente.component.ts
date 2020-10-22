import { Component, OnInit } from '@angular/core';
import {CLIENTES} from "../../shared/model/CLIENTES";

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  clientes = CLIENTES;
  displayedColumns = ['nome', 'cpf', 'telefone', 'tamanho'];
  constructor() { }

  ngOnInit(): void {
  }

}
