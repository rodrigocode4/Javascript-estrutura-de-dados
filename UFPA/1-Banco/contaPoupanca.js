export class ContaPoupanca {
    constructor(saldo = 0) {
        this._saldo = saldo;
    }

    get mostrarSaldo() {
        return this._saldo;
    }

    set depositar(saldo) {
        this._saldo += saldo;
    }
}