import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemPedidoComponent} from './pedido/listagem-pedido/listagem-pedido.component';
import {CadastrarPedidoComponent} from './pedido/cadastrar-pedido/cadastrar-pedido.component';
import {CadastrarClienteComponent} from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import {CadastrarEmpresaComponent} from './empresa/cadastrar-empresa/cadastrar-empresa.component';
import {HeaderComponent} from './components/header/header.component';
import {ClientePainelComponent} from './cliente/cliente-painel/cliente-painel.component';
import {EmpresaPainelComponent} from "./empresa/empresa-painel/empresa-painel.component";
import {ListagemClienteComponent} from "./cliente/listagem-cliente/listagem-cliente.component";

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
    path: 'cadastrarcliente/:id',
    component: CadastrarClienteComponent
  },

  {
      path: 'cadastrarempresa',
    component: CadastrarEmpresaComponent
  },

  {
      path: 'clientepainel',
    component: ClientePainelComponent
  },

  {
    path: 'empresapainel',
    component: EmpresaPainelComponent
  },

  {
    path: 'listarclientes',
    component: ListagemClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
