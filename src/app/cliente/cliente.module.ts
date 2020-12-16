import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ClientePainelComponent } from './cliente-painel/cliente-painel.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { MatTableModule } from '@angular/material/table';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [CadastrarClienteComponent, ClientePainelComponent, ListagemClienteComponent],
  exports: [
    CadastrarClienteComponent,
    ClientePainelComponent,
    ListagemClienteComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    RouterModule,
    PipesModule
  ]
})
export class ClienteModule { }
