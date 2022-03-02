class ClienteEspecial extends Cliente {
    
    constructor(nome, cpf, conta, contaEspecial){
        super(nome, cpf, conta)
        this.contaEspecial = contaEspecial
    }
   

    saldoTotal() {
        return conta.saldo + contaEspecial.saldo;
    }

}
