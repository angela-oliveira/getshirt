export class Pedido {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  tamanho: string;
  obsevacao: string;

}
// import {Component} from '@angular/core';

// export interface Pedido {
//     nome : string;
//     cpf : string;
//     telefone: string;
//     tamanho: string;
//     observacao: string;
// }

// const ELEMENT_DATA: Pedido[] = [
//   { nome: 'Hydrogen', cpf: '123', telefone: '123', tamanho: 'H', observacao: 'teste'},
//   { nome: 'Helium', cpf: '4.0026', telefone: '3452352', tamanho: 'He', observacao: 'testeeeee'},
//   { nome: 'Lithium', cpf: '6.941', telefone: '3452352', tamanho: 'Li', observacao: 'testeeeee'},
//   { nome: 'Beryllium', cpf: '9.0122', telefone: '3452352', tamanho: 'Be', observacao: 'testeeeee'},
//   { nome: 'Boron', cpf: '10.811', telefone: '3452352', tamanho: 'B', observacao: 'testeeeee'},
//   { nome: 'Carbon', cpf: '12.010', telefone: '3452352', tamanho: 'C', observacao: 'testeeeee'},
//   { nome: 'Nitrogen', cpf: '14.006', telefone: '3452352', tamanho: 'N', observacao: 'testeeeee'},
//   { nome: 'Oxygen', cpf: '15.999', telefone: '3452352', tamanho: 'O', observacao: 'testeeeee'},
//   { nome: 'Fluorine', cpf: '18.998', telefone: '3452352', tamanho: 'F', observacao: 'testeeeee'},
//   { nome: 'Neon', cpf: '20.179', telefone: '3452352', tamanho: 'Ne', observacao: 'testeeeee'},
// ];

// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
// })
// export class TableBasicExample {
//   displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'tamanho', 'observacao'];
//   dataSource = ELEMENT_DATA;
// }
