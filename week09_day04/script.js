var Capo = /** @class */ (function () {
    function Capo(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
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
    Capo.prototype.getSaldoCapo = function () {
        return (this.saldo / 100) * this.prezzoIvaInclusa;
    };
    Capo.prototype.getAcquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return Capo;
}());
var capoA = new Capo(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45);
console.log(capoA);
console.log('Saldo capo = ' + capoA.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoA.getAcquistoCapo() + '€');
var capoB = new Capo(2, 4111, 'estate', 't-shirt', 1231, 6, 'rosso', 5.50, 6.71, 'magazzino', 30);
console.log(capoB);
console.log('Saldo capo = ' + capoB.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoB.getAcquistoCapo() + '€');
var capoC = new Capo(3, 1181, 'inverno', 'felpa', 1229, 8, 'beige', 17.50, 21.35, 'negozio', 50);
console.log(capoC);
console.log('Saldo capo = ' + capoC.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoC.getAcquistoCapo() + '€');
var capoD = new Capo(4, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50);
console.log(capoD);
console.log('Saldo capo = ' + capoD.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoD.getAcquistoCapo() + '€');
var capoE = new Capo(5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino', 60);
console.log(capoE);
console.log('Saldo capo = ' + capoE.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoE.getAcquistoCapo() + '€');
