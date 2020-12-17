import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../shared/model/pedido';
import {PedidoService} from '../../shared/services/pedido.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {PedidoFirestoreService} from '../../shared/services/pedido-firestore.service';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";


@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  dataSource: MatTableDataSource<Pedido>;
  mostrarColunas = ['nome', 'telefone', 'quantidade', 'acoes'];
  // private id: number;




  constructor( private snackBar: MatSnackBar, private pedidoService: PedidoService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.pedidoService.listar().subscribe(
      pedidos => this.dataSource = new MatTableDataSource(pedidos)
    );
  }

  editar(pedido: Pedido): void {
    this.roteador.navigate(['cadastrarpedido', pedido.idPedido]);
  }

  remover(pedido: Pedido): void {
    this.pedidoService.remover(pedido.idPedido).subscribe(
      resposta => {
          const snackConfig = new MatSnackBarConfig();
          snackConfig.politeness = 'assertive';
          snackConfig.duration = 5000;
          snackConfig.panelClass = ['Success'];

          this.snackBar.open( 'Removido com sucesso.', 'x', snackConfig)

          this.roteador.navigate(['listarpedido']);
          console.log('Removido com sucesso');
        }
    );

  }
  goback(){
    window.history.back()
  }

}
