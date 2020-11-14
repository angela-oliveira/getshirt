import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {RouterModule} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {CadastrarPedidoComponent} from './cadastrar-pedido/cadastrar-pedido.component';
import {PipesModule} from '../shared/pipes/pipes.module';



@NgModule({
  declarations: [CadastrarPedidoComponent, ListagemPedidoComponent ],
  exports: [
    CadastrarPedidoComponent,
    ListagemPedidoComponent
  ],
  imports: [
    MatSelectModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PipesModule
  ]
})
export class PedidoModule { }
