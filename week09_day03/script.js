var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// - - - - - - - - - - - - - - - SOLUZIONE CON UNA CLASSE
console.log('- - - - - - - - - - SOLUZIONE CON UNA CLASSE');
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
// - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ABSTRACT
console.log('- - - - - - - - - - SOLUZIONE CON CLASSE ABSTRACT');
// definizione classe astratta Dipendente
var Contribuente = /** @class */ (function () {
    function Contribuente(_codice, _reddito, _inps, _irpef) {
        this.codice = _codice;
        this.reddito = _reddito;
        this.inps = _inps;
        this.irpef = _irpef;
    }
    return Contribuente;
}());
// definizione classe Dipendente come estensione di Contribuente
var Dipendente = /** @class */ (function (_super) {
    __extends(Dipendente, _super);
    function Dipendente(_codice, _reddito, _inps, _irpef) {
        return _super.call(this, _codice, _reddito, _inps, _irpef) || this;
    }
    Dipendente.prototype.getImponibile = function () {
        return (this.codice / 100) * this.reddito;
    };
    Dipendente.prototype.getInps = function () {
        return (this.inps / 100) * this.getImponibile();
    };
    Dipendente.prototype.getIrpef = function () {
        return (this.irpef / 100) * this.getImponibile();
    };
    Dipendente.prototype.getUtile = function () {
        return this.reddito - this.getInps() - this.getIrpef();
    };
    return Dipendente;
}(Contribuente));
// istanza classe Lavoratore + console.log
var dipendente = new Dipendente(70, 200000, 10, 10);
console.log('Codice redditività: ' + dipendente.codice + '%');
console.log('Reddito annuo lordo: ' + dipendente.reddito + ' €');
console.log('Imponibile annuo: ' + dipendente.getImponibile() + ' €');
console.log('Inps: ' + dipendente.inps + '%' + ' ovvero ' + dipendente.getInps() + ' €');
console.log('Irpef: ' + dipendente.irpef + '%' + ' ovvero ' + dipendente.getIrpef() + ' €');
console.log('Reddito annuo netto: ' + dipendente.getUtile() + ' €');
