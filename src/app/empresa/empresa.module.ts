import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CadastrarClienteComponent} from '../cliente/cadastrar-cliente/cadastrar-cliente.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { EmpresaPainelComponent } from './empresa-painel/empresa-painel.component';



@NgModule({
  declarations: [CadastrarEmpresaComponent, EmpresaPainelComponent],
  exports: [
    CadastrarEmpresaComponent,
    EmpresaPainelComponent,
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
export class EmpresaModule { }
