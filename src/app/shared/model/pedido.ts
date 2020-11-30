export class Pedido {

  id?: string;
  nome?: string;
  telefone?: string;
  tamanho?: string;
  observacao?: string;
  // DataPedido:

  constructor(id?: string, pedido: Pedido = {}) {
    this.id = id;
    this.nome = pedido.nome;
    this.telefone = pedido.telefone;
    this.tamanho = pedido.tamanho;
    this.observacao = pedido.observacao;
  }

}

