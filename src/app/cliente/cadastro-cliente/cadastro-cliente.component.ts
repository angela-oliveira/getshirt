import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../shared/model/cliente";
import {CLIENTES} from "../../shared/model/CLIENTES";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Array<Cliente>;

  constructor() {
    this.cliente = new Cliente();
    this.clientes = CLIENTES;
  }
  inserirCliente(): void{
    this.clientes.push(this.cliente);
    this.cliente = new Cliente();
  }
  ngOnInit(): void {
  }

}
