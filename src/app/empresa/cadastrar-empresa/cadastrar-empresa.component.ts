import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Empresa} from '../../shared/model/Empresa';
import {EmpresaService} from '../../shared/services/empresa.service';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {
  empresa: Empresa;
  empresaLogin: Empresa;
  empresas: Array<Empresa>;
  operacaoCadastro = true;

  // tslint:disable-next-line:max-line-length
  constructor(private empresaService: EmpresaService, private rotalAtual: ActivatedRoute,
              private roteador: Router,  private snackBar: MatSnackBar) {
    this.empresa = new Empresa();
    this.empresaLogin = new Empresa();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotalAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.empresaService.pesquisarPorId(idParaEdicao).subscribe(
        empresaRetornado => this.empresa = empresaRetornado
      );
    }
  }
  ngOnInit(): void {
  }
  inserirEmpresa(): void {
    this.roteador.navigate(['/empresapainel']);
    // if (this.empresa.idEmpresa) {
    //this.empresaService.atualizar(this.empresa).subscribe(
    //  empresaAlterado => {
    //    console.log(empresaAlterado);
    ////    this.roteador.navigate(['/empresapainel']);
    //    // this.roteador.navigate(['listarpedido']);
    //  }
    //);
    //} else {
    //console.log('aqui', this.empresa)
    //if (!this.empresa.nome) {
    ////  console.log('nao existe')
    // const snackConfig = new MatSnackBarConfig();
    //  snackConfig.politeness = 'assertive';
    //  snackConfig.duration = 5000;
    //  snackConfig.panelClass = ['Success'];
    //  this.snackBar.open( 'Preencha todos os campos.', 'x', snackConfig)


    //} else {
    //this.empresaService.inserir(this.empresa).subscribe(
    //  empresaInserido => {
    //    console.log(empresaInserido);

    //    const snackConfig = new MatSnackBarConfig();
    //    snackConfig.politeness = 'assertive';
    //    snackConfig.duration = 5000;
    //    snackConfig.panelClass = ['Success'];
    //    this.snackBar.open( 'Empresa cadastrada com sucesso.', 'x', snackConfig)
          // this.roteador.navigate(['/empresapainel']);
          //}
        //);

        //   }
   // }
  }
  fazerloginEmpresa(): void{
    this.roteador.navigate(['empresapainel']);
//    if (!this.empresaLogin.email || !this.empresaLogin.senha) {
//      const snackConfig = new MatSnackBarConfig();
    //    snackConfig.politeness = 'assertive';
    //snackConfig.duration = 5000;
    // this.snackBar.open( 'Preencha todos os campos.', 'x', snackConfig)
    //} else {
    //this.empresaService.login(this.empresaLogin.email, this.empresaLogin.senha).subscribe(
    //  empresaLogada => {
    //    this.empresaLogin = empresaLogada;
    //    if (this.empresaLogin == null){
    //      const snackConfig = new MatSnackBarConfig();
    //      snackConfig.politeness = 'assertive';
    ////      snackConfig.duration = 5000;
    //    this.snackBar.open( 'E-mail ou senha incorreta.', 'x', snackConfig)
    //    }else {
    //      this.roteador.navigate(['empresapainel']);
    //    }
    //  }
//      );
  //  }

  }
}
