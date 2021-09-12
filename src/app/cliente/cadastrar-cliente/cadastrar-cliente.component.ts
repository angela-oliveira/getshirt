import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../shared/model/cliente';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../../shared/services/cliente.service';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente;
  clienteLogin: Cliente;
  clientes: Array<Cliente>;
  operacaoCadastro = true;
  clienteLogado = true;

  // tslint:disable-next-line:max-line-length
  constructor(private clienteService: ClienteService, private rotalAtual: ActivatedRoute,
              private roteador: Router , private snackBar: MatSnackBar) {
    this.cliente = new Cliente();
    this.clienteLogin = new Cliente();
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
    this.roteador.navigate(['/listarclientes']);
    ////  if (this.cliente.idCliente) {
    //this.clienteService.atualizar(this.cliente).subscribe(
    //    clienteAlterado => {
    //     console.log(clienteAlterado);
    //    const snackConfig = new MatSnackBarConfig();
    //    snackConfig.politeness = 'assertive';
    //    snackConfig.duration = 5000;
    //    snackConfig.panelClass = ['Success'];
//
    //        this.snackBar.open( 'Cliente alterado com sucesso.', 'x', snackConfig)
    //    if (this.operacaoCadastro) {
//
    //        this.roteador.navigate(['/clientepainel']);
    //    } else {
//
    ////        this.roteador.navigate(['/listarclientes']);
    //  }
    //  }
    //);
    //} else {
    //if (!this.cliente.nome) {
    //  const snackConfig = new MatSnackBarConfig();
    //  snackConfig.politeness = 'assertive';
    //  snackConfig.duration = 5000;
    //  this.snackBar.open( 'Preencha todos os campos.', 'x', snackConfig)
    //} else {
    //  this.clienteService.inserir(this.cliente).subscribe(
    //    clienteInserido => {
    //      console.log(clienteInserido);
    //      const snackConfig = new MatSnackBarConfig();
    //      snackConfig.politeness = 'assertive';
    //      snackConfig.duration = 5000;
    //      this.snackBar.open( 'Cliente cadastrado com sucesso.', 'x', snackConfig)
    ////      this.roteador.navigate(['clientepainel']);
    //    }
    //  );
    //}

   // }
  }
  fazerlogin(): void{
    this.roteador.navigate(['clientepainel']);
   // if (!this.clienteLogin.email || !this.clienteLogin.senha) {
    //   const snackConfig = new MatSnackBarConfig();
    //snackConfig.politeness = 'assertive';
    //snackConfig.duration = 5000;
    //this.snackBar.open( 'Preencha todos os campos.', 'x', snackConfig)
    //} else {
    //this.clienteService.login(this.clienteLogin.email, this.clienteLogin.senha).subscribe(
    //  clienteLogado => {
    //    this.clienteLogin = clienteLogado;
    //    if (this.clienteLogin == null){
    //      const snackConfig = new MatSnackBarConfig();
    ////      snackConfig.politeness = 'assertive';
    //    snackConfig.duration = 5000;
    //      this.snackBar.open( 'E-mail ou senha incorreta.', 'x', snackConfig)
    //    }else {
    //      this.roteador.navigate(['clientepainel']);
    //    }
    //  }
    //);
   // }

  }

}
