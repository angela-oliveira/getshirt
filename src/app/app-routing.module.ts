import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemPedidoComponent} from './pedido/listagem-pedido/listagem-pedido.component';
import {CadastrarPedidoComponent} from './pedido/cadastrar-pedido/cadastrar-pedido.component';
import {CadastrarClienteComponent} from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import {CadastrarEmpresaComponent} from './empresa/cadastrar-empresa/cadastrar-empresa.component';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },

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
  },

  {
    path: 'cadastrarcliente',
    component: CadastrarClienteComponent
  },

  {
      path: 'cadastrarempresa',
    component: CadastrarEmpresaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
