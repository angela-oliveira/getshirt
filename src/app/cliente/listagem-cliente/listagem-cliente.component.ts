import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  dataSource: MatTableDataSource<Cliente>;
  mostrarColunas = ['nome', 'telefone', 'cpf', 'email'];

  constructor(private clienteService: ClienteService, private roteador: Router) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientes => this.dataSource = new MatTableDataSource(clientes)
    );
  }

  editar(cliente: Cliente): void {
    this.roteador.navigate(['cadastrarcliente', cliente.idCliente]);
  }

  remover(cliente: Cliente): void {
    this.clienteService.remover(cliente.idCliente).subscribe(
      resposta => {
          this.roteador.navigate(['listarcliente']);
          console.log('Removido com sucesso');
        }
    );

  }
  goback(){
    window.history.back()
  }
}
