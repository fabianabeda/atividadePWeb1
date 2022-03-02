class contaEspecial extends Conta{
    private _contaEspecial: Conta;
    
    constructor(numero: string, saldo: number){
        super(numero, saldo);
    }
    
    get contaEspecial() {
        return this._contaEspecial                                          ;
    }
    set contaEspecial(contaEspecial) {
        this._contaEspecial = contaEspecial;
    }
  
}
