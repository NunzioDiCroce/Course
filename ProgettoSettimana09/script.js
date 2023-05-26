// definizione classe
var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.ricarica = function (_importoRicarica) {
        return _importoRicarica;
    };
    Utente.prototype.chiamata = function (_minutiChiamata) {
        return _minutiChiamata;
    };
    Utente.prototype.numero404 = function (_importoRicarica, _minutiChiamata) {
        return this.credito + this.ricarica(_importoRicarica) - (0.2 * this.chiamata(_minutiChiamata) * this.numeroChiamate);
    };
    Utente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Utente;
}());
// prima istanza + console.log
var primoUtente = new Utente(20, 2); //credito, numeroChiamate
console.log('');
console.log('PRIMO UTENTE');
console.log('- - - - - - - - - -');
console.log(primoUtente);
console.log("Ricarica: ".concat(primoUtente.ricarica(30), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(primoUtente.chiamata(15), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(primoUtente.numero404(30, 15), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(primoUtente.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(primoUtente.azzeraChiamate()));
// seconda istanza + console.log
var secondoUtente = new Utente(0, 2); //credito, numeroChiamate
console.log('');
console.log('SECONDO UTENTE');
console.log('- - - - - - - - - -');
console.log(secondoUtente);
console.log("Ricarica: ".concat(secondoUtente.ricarica(20), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(secondoUtente.chiamata(10), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(secondoUtente.numero404(20, 10), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(secondoUtente.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(secondoUtente.azzeraChiamate()));
// terza istanza + console.log
var terzoUtente = new Utente(0, 4); //credito, numeroChiamate
console.log('');
console.log('TERZO UTENTE');
console.log('- - - - - - - - - -');
console.log(terzoUtente);
console.log("Ricarica: ".concat(terzoUtente.ricarica(10), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(terzoUtente.chiamata(5), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(terzoUtente.numero404(10, 5), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(terzoUtente.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(terzoUtente.azzeraChiamate()));
