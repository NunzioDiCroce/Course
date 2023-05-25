
class capoAbbigliamento {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoIvaEsclusa:number;
    prezzoIvaInclusa:number;
    disponibile:string;
    saldo:number;

    constructor(_id:number, _codprod:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoIvaEsclusa:number, _prezzoIvaInclusa:number, _disponibile:string, _saldo:number) {
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
    getSaldoCapo():number {
        return (this.saldo/100) * this.prezzoIvaInclusa
    }
    getAcquistoCapo():number {
        return this.prezzoIvaInclusa - this.getSaldoCapo()
    }
}

