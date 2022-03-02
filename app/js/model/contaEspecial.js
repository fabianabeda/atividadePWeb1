class contaEspecial extends Conta{
    constructor(numero, saldo){
        super(numero, saldo);
    }
    
    get contaEspecial() {
        return this._contaEspecial                                          ;
    }
    set contaEspecial(contaEspecial) {
        this._contaEspecial = contaEspecial;
    }

}
