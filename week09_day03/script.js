// - - - - - - - - - - - - - - - SOLUZIONE 1 - - - - - - - - - -
console.log('- - - - - - - - - - SOLUZIONE 1 - - - - - - - - - -');
// definizione classe Lavoratore
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function (codRedd, redditoAnnuoLordo) {
        return (codRedd / 100) * redditoAnnuoLordo;
    };
    Lavoratore.prototype.getTasseInps = function (tasseInps) {
        return (tasseInps / 100) * this.getUtileTasse(this.codRedd, this.redditoAnnuoLordo);
    };
    Lavoratore.prototype.getTasseIrpef = function (tasseIrpef) {
        return (tasseIrpef / 100) * this.getUtileTasse(this.codRedd, this.redditoAnnuoLordo);
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getTasseInps(this.tasseInps) - this.getTasseIrpef(this.tasseIrpef);
    };
    return Lavoratore;
}());
// definizione variabili di input per simulazione
var codRedd_input = 80;
var redditoAnnuoLordo_input = 100000;
var tasseInps_input = 20;
var tasseIrpef_input = 20;
// istanza classe Lavoratore + console.log
var lavoratore = new Lavoratore(codRedd_input, redditoAnnuoLordo_input, tasseInps_input, tasseIrpef_input);
console.log('Codice redditività: ' + lavoratore.codRedd + '%');
console.log('Reddito annuo lordo: ' + lavoratore.redditoAnnuoLordo + ' €');
console.log('Imponibile annuo: ' + lavoratore.getUtileTasse(codRedd_input, redditoAnnuoLordo_input) + ' €');
console.log('Inps: ' + lavoratore.tasseInps + '%' + ' ovvero ' + lavoratore.getTasseInps(tasseInps_input) + ' €');
console.log('Irpef: ' + lavoratore.tasseIrpef + '%' + ' ovvero ' + lavoratore.getTasseIrpef(tasseIrpef_input) + ' €');
console.log('Reddito annuo netto: ' + lavoratore.getRedditoAnnuoNetto() + ' €');
// - - - - - - - - - - - - - - - SOLUZIONE 2 - - - - - - - - - -
console.log('- - - - - - - - - - SOLUZIONE 2 - - - - - - - - - -');
