var capoAbbigliamento = /** @class */ (function () {
    function capoAbbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
        this.prezzoIvaInclusa = _prezzoIvaInclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    capoAbbigliamento.prototype.getSaldoCapo = function () {
        return (this.saldo / 100) * this.prezzoIvaInclusa;
    };
    capoAbbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return capoAbbigliamento;
}());
