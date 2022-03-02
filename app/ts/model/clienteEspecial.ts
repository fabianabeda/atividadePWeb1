class ClienteEspecial extends Cliente {
    private _saldo: number;
    private _contaEspecial: Conta;

    constructor(nome: string, cpf: string, conta: Conta, contaEspecial: Conta){
        super(nome, cpf, conta)
        this.conta = conta
        this._contaEspecial = contaEspecial
    }
    
    saldoTotal() {
        return this.conta.saldo + this._contaEspecial.saldo;
    }
}