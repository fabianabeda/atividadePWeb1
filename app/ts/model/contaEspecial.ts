class contaEspecial extends Conta{
    private _contaEspecial: Conta;
    
    constructor(numero: string, saldo: number){
        super(numero, saldo);
    }
    debitar(valor: number): void {
        this._saldo -= valor;
    }
    get contaEspecial() {
        return this._contaEspecial                                          ;
    }
    set contaEspecial(contaEspecial) {
        this._contaEspecial = contaEspecial;
    }
  
}
