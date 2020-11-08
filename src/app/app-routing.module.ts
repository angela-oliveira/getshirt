import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemPedidoComponent} from './pedido/listagem-pedido/listagem-pedido.component';
import {CadastrarPedidoComponent} from './pedido/cadastrar-pedido/cadastrar-pedido.component';

const routes: Routes = [
  {
    path: 'listarpedido',
    component: ListagemPedidoComponent
  },

  {
    path: 'cadastrarpedido/:id',
    component: CadastrarPedidoComponent
  },

  {
    path: 'cadastrarpedido',
    component: CadastrarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
