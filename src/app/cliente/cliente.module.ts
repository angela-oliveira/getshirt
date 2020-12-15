import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CadastrarClienteComponent],
  exports: [
    CadastrarClienteComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
