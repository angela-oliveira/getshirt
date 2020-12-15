export class Pedido {

  idPedido?: string;
  nomeCliente?: string;
  telefone?: string;
  tamanho?: string;
  observacao?: string;
  // DataPedido:

  constructor(idPedido?: string, pedido: Pedido = {}) {
    this.idPedido = pedido.idPedido;
    this.nomeCliente = pedido.nomeCliente;
    this.telefone = pedido.telefone;
    this.tamanho = pedido.tamanho;
    this.observacao = pedido.observacao;
  }

}

