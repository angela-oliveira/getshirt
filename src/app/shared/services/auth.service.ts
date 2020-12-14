import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import {Cliente} from '../model/cliente';
import {ClienteService} from './cliente.service';


@Injectable()
export class AuthService {

  clientes: Array<Cliente>;
  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private clienteService: ClienteService) { }

  // tslint:disable-next-line:typedef
  fazerLogin(cliente: Cliente){
    this.clienteService.listar().subscribe(
      clientes => this.clientes = clientes
    );
    // tslint:disable-next-line:only-arrow-functions typedef
    this.clientes.forEach(function(value) {
      if (cliente.email === value.email &&
        cliente.senha === value.senha) {

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);

      } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
      }
    });

  }

  // tslint:disable-next-line:typedef
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
