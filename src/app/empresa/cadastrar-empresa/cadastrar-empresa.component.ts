import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Empresa} from '../../shared/model/Empresa';
import {EmpresaService} from '../../shared/services/empresa.service';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {
  empresa: Empresa;
  empresas: Array<Empresa>;
  operacaoCadastro = true;

  // tslint:disable-next-line:max-line-length
  constructor(private empresaService: EmpresaService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.empresa = new Empresa();
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
    if (this.empresa.idEmpresa) {
      this.empresaService.atualizar(this.empresa).subscribe(
        empresaAlterado => {
          console.log(empresaAlterado);
          // this.roteador.navigate(['listarpedido']);
        }
      );
    } else {
      this.empresaService.inserir(this.empresa).subscribe(
        empresaInserido => {
          console.log(empresaInserido);
          this.roteador.navigate(['empresapainel']);
        }
      );
    }
  }
  // // tslint:disable-next-line:typedef
  // fazerLogin(){
  //   // console.log(this.usuario);
  //   this.authService.fazerLogin(this.empresa);
  // }

}
