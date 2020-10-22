import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemPedidoComponent} from './pedido/listagem-pedido/listagem-pedido.component';
import {PedidoClienteComponent} from './pedido/pedido-cliente/pedido-cliente.component';

const routes: Routes = [
  {
    path: 'listarpedido',
    component: ListagemPedidoComponent
  },
  {
    path: 'pedidocliente',
    component: PedidoClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
