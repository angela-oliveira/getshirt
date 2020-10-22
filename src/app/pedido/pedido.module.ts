import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoClienteComponent } from './pedido-cliente/pedido-cliente.component';
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


@NgModule({
  declarations: [PedidoClienteComponent, ListagemPedidoComponent],
  exports: [
    PedidoClienteComponent,
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
    RouterModule
  ]
})
export class PedidoModule { }
