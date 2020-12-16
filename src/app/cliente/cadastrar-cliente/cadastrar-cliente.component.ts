import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../../shared/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente;
  clientes: Array<Cliente>;
  operacaoCadastro = true;

  // tslint:disable-next-line:max-line-length
  constructor(private clienteService: ClienteService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new Cliente();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotalAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.clienteService.pesquisarPorId(idParaEdicao).subscribe(
        clienteRetornado => this.cliente = clienteRetornado
      );
    }
  }
  ngOnInit(): void {
  }
  inserirCliente(): void {
    if (this.cliente.idCliente) {
      this.clienteService.atualizar(this.cliente).subscribe(
        clienteAlterado => {
          console.log(clienteAlterado);
          // this.roteador.navigate(['listarpedido']);
        }
      );
    } else {
      this.clienteService.inserir(this.cliente).subscribe(
        clienteInserido => {
          console.log(clienteInserido);
          this.roteador.navigate(['clientepainel']);
        }
      );
    }
  }
  // // tslint:disable-next-line:typedef
  // fazerLogin(){
  //   // console.log(this.usuario);
  //   this.authService.fazerLogin(this.cliente);
  // }

}
