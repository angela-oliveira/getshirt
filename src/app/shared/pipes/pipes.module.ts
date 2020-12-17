import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelefonePipe} from './telefone.pipe';
import { CpfPipe } from './cpf.pipe';



@NgModule({
  declarations: [TelefonePipe, CpfPipe],
  imports: [
    CommonModule
  ],
  exports: [TelefonePipe, CpfPipe]
})
export class PipesModule { }
