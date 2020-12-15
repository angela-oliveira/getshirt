export class Empresa {

  idEmpresa?: string;
  nome?: string;
  cnpj?: string;
  telefone?: string;
  email?: string;
  senha?: string;

  constructor(idEmpresa?: string, empresa: Empresa = {}) {
    this.idEmpresa = empresa.idEmpresa;
    this.nome = empresa.nome;
    this.cnpj = empresa.cnpj;
    this.telefone = empresa.telefone;
    this.email = empresa.email;
    this.senha = empresa.senha;
  }
}
