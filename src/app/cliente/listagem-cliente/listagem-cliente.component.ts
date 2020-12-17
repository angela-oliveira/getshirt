import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ClienteService} from '../../shared/services/cliente.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  dataSource: MatTableDataSource<Cliente>;
  mostrarColunas = ['nome', 'telefone', 'cpf', 'email', 'acoes'];

  constructor( private snackBar: MatSnackBar, private clienteService: ClienteService, private roteador: Router) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(
      clientes => this.dataSource = new MatTableDataSource(clientes)
    );
  }

  editar(cliente: Cliente): void {
    console.log( cliente.idCliente)
    this.roteador.navigate(['cadastrarcliente', cliente.idCliente]);
  }

  remover(cliente: Cliente): void {
    this.clienteService.remover(cliente.idCliente).subscribe(
      resposta => {
          this.roteador.navigate(['listarclientes']);
          const snackConfig = new MatSnackBarConfig();
          snackConfig.politeness = 'assertive';
          snackConfig.duration = 5000;
          snackConfig.panelClass = ['Success'];

          this.snackBar.open( 'Removido com sucesso.', 'x', snackConfig)

          
          console.log('Removido com sucesso');
        }
    );

  }
  goback(){
    window.history.back()
  }
}
