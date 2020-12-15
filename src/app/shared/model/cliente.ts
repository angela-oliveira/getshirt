export class Cliente {

  idCliente?: string;
  nome?: string;
  cpf?: string;
  telefone?: string;
  email?: string;
  senha?: string;

  constructor(idCliente?: string, cliente: Cliente = {}) {
    this.idCliente = cliente.idCliente;
    this.nome = cliente.nome;
    this.cpf = cliente.cpf;
    this.telefone = cliente.telefone;
    this.email = cliente.email;
    this.senha = cliente.senha;
  }
}
