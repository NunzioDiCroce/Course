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
// definizione classe astratta Contribuente
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
// - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ESTESA
console.log('- - - - - - - - - - SOLUZIONE CON CLASSE ESTESA');
// definizione classe Cittadino
var Cittadino = /** @class */ (function () {
    function Cittadino(_reddito, _inps, _irpef) {
        this.reddito = _reddito;
        this.inps = _inps;
        this.irpef = _irpef;
    }
    Cittadino.prototype.getImponibile = function (codice) {
        return (codice / 100) * this.reddito;
    };
    Cittadino.prototype.getInps = function (codice) {
        return (this.inps / 100) * this.getImponibile(codice);
    };
    Cittadino.prototype.getIrpef = function (codice) {
        return (this.irpef / 100) * this.getImponibile(codice);
    };
    Cittadino.prototype.getUtile = function (codice) {
        return this.reddito - this.getInps(codice) - this.getIrpef(codice);
    };
    return Cittadino;
}());
// definizione classe CittadinoTipoA come estensione di Cittadino
var CittadinoTipoA = /** @class */ (function (_super) {
    __extends(CittadinoTipoA, _super);
    function CittadinoTipoA(_codice, _reddito, _inps, _irpef) {
        var _this = _super.call(this, _reddito, _inps, _irpef) || this;
        _this.codice = _codice;
        return _this;
    }
    CittadinoTipoA.prototype.getImponibile = function (codice) {
        return (codice / 100) * this.reddito;
    };
    CittadinoTipoA.prototype.getInps = function (codice) {
        return (this.inps / 100) * this.getImponibile(codice);
    };
    CittadinoTipoA.prototype.getIrpef = function (codice) {
        return (this.irpef / 100) * this.getImponibile(codice);
    };
    CittadinoTipoA.prototype.getUtile = function (codice) {
        return this.reddito - this.getInps(codice) - this.getIrpef(codice);
    };
    return CittadinoTipoA;
}(Cittadino));
// definizione variabili di input per simulazione classe estesa
var codiceA = 90;
// istanza classe CittadinoTipoA + console.log
var cittadinoTipoA = new CittadinoTipoA(codiceA, 10000, 5, 5);
console.log('Simulazione Cittadino Tipo A');
console.log('Codice redditività: ' + cittadinoTipoA.codice + '%');
console.log('Reddito annuo lordo: ' + cittadinoTipoA.reddito + ' €');
console.log('Imponibile annuo: ' + cittadinoTipoA.getImponibile(codiceA) + ' €');
console.log('Inps: ' + cittadinoTipoA.inps + '%' + ' ovvero ' + cittadinoTipoA.getInps(codiceA) + ' €');
console.log('Irpef: ' + cittadinoTipoA.irpef + '%' + ' ovvero ' + cittadinoTipoA.getIrpef(codiceA) + ' €');
console.log('Reddito annuo netto: ' + cittadinoTipoA.getUtile(codiceA) + ' €');
// - - - - - - - - - - - - - - - SOLUZIONE CON TRE OGGETTI
console.log('- - - - - - - - - - SOLUZIONE CON TRE OGGETTI');
// definizione classe Utente
var Utente = /** @class */ (function () {
    function Utente(_reddito, _inps, _irpef) {
        this.reddito = _reddito;
        this.inps = _inps;
        this.irpef = _irpef;
    }
    return Utente;
}());
// definizione classe UtenteUno come estensione di Utente
var UtenteUno = /** @class */ (function (_super) {
    __extends(UtenteUno, _super);
    function UtenteUno(_codice, _reddito, _inps, _irpef) {
        var _this = _super.call(this, _reddito, _inps, _irpef) || this;
        _this.codice = _codice;
        return _this;
    }
    UtenteUno.prototype.getImponibile = function () {
        return (this.codice / 100) * this.reddito;
    };
    UtenteUno.prototype.getInps = function () {
        return (this.inps / 100) * this.getImponibile();
    };
    UtenteUno.prototype.getIrpef = function () {
        return (this.irpef / 100) * this.getImponibile();
    };
    UtenteUno.prototype.getUtile = function () {
        return this.reddito - this.getInps() - this.getIrpef();
    };
    return UtenteUno;
}(Utente));
// istanza (primo oggetto) utenteUno + console.log
var utenteUno = new UtenteUno(10, 10000, 5, 5);
console.log('UTENTE UNO');
console.log('Codice redditività: ' + utenteUno.codice + '%');
console.log('Reddito annuo lordo: ' + utenteUno.reddito + ' €');
console.log('Imponibile annuo: ' + utenteUno.getImponibile() + ' €');
console.log('Inps: ' + utenteUno.inps + '%' + ' ovvero ' + utenteUno.getInps() + ' €');
console.log('Irpef: ' + utenteUno.irpef + '%' + ' ovvero ' + utenteUno.getIrpef() + ' €');
console.log('Reddito annuo netto: ' + utenteUno.getUtile() + ' €');
// istanza (secondo oggetto) utenteUno + console.log
var utenteDue = new UtenteUno(20, 20000, 10, 10);
console.log('UTENTE DUE');
console.log('Codice redditività: ' + utenteDue.codice + '%');
console.log('Reddito annuo lordo: ' + utenteDue.reddito + ' €');
console.log('Imponibile annuo: ' + utenteDue.getImponibile() + ' €');
console.log('Inps: ' + utenteDue.inps + '%' + ' ovvero ' + utenteDue.getInps() + ' €');
console.log('Irpef: ' + utenteDue.irpef + '%' + ' ovvero ' + utenteDue.getIrpef() + ' €');
console.log('Reddito annuo netto: ' + utenteDue.getUtile() + ' €');
// istanza (terzo oggetto) utenteUno + console.log
var utenteTre = new UtenteUno(30, 30000, 15, 15);
console.log('UTENTE TRE');
console.log('Codice redditività: ' + utenteTre.codice + '%');
console.log('Reddito annuo lordo: ' + utenteTre.reddito + ' €');
console.log('Imponibile annuo: ' + utenteTre.getImponibile() + ' €');
console.log('Inps: ' + utenteTre.inps + '%' + ' ovvero ' + utenteTre.getInps() + ' €');
console.log('Irpef: ' + utenteTre.irpef + '%' + ' ovvero ' + utenteTre.getIrpef() + ' €');
console.log('Reddito annuo netto: ' + utenteTre.getUtile() + ' €');
