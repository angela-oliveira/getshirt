import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListagemClienteComponent} from "./cliente/listagem-cliente/listagem-cliente.component";
import {CadastroClienteComponent} from "./cliente/cadastro-cliente/cadastro-cliente.component";

const routes: Routes = [
  {
    path:'listarcliente',
    component:ListagemClienteComponent
  },
  {
    path:'cadastrarcliente',
    component:CadastroClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
