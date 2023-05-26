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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON INTERFACCIA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON INTERFACCIA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - ');
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
var primoUtente = new Utente(30, 2); //credito, numeroChiamate
console.log('');
console.log('Primo utente');
console.log('- - - - - - - - - -');
console.log(primoUtente);
console.log("Ricarica: ".concat(primoUtente.ricarica(20), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(primoUtente.chiamata(15), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(primoUtente.numero404(20, 15), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(primoUtente.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(primoUtente.azzeraChiamate()));
// seconda istanza + console.log
var secondoUtente = new Utente(0, 2); //credito, numeroChiamate
console.log('');
console.log('Secondo utente');
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
console.log('Terzo utente');
console.log('- - - - - - - - - -');
console.log(terzoUtente);
console.log("Ricarica: ".concat(terzoUtente.ricarica(10), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(terzoUtente.chiamata(5), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(terzoUtente.numero404(10, 5), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(terzoUtente.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(terzoUtente.azzeraChiamate()));
// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ASTRATTA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ASTRATTA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - ');
// definizione classe astratta
var Abbonamento = /** @class */ (function () {
    function Abbonamento(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    return Abbonamento;
}());
// definizione classe estesa
var nuovoAbbonamento = /** @class */ (function (_super) {
    __extends(nuovoAbbonamento, _super);
    function nuovoAbbonamento(_credito, _numeroChiamate, _tariffa) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = _tariffa;
        return _this;
    }
    nuovoAbbonamento.prototype.ricarica = function (_importoRicarica) {
        return _importoRicarica;
    };
    nuovoAbbonamento.prototype.chiamata = function (_minutiChiamata) {
        return _minutiChiamata;
    };
    nuovoAbbonamento.prototype.numero404 = function (_importoRicarica, _minutiChiamata) {
        return this.credito + this.ricarica(_importoRicarica) - (this.tariffa * this.chiamata(_minutiChiamata) * this.numeroChiamate);
    };
    nuovoAbbonamento.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    nuovoAbbonamento.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return nuovoAbbonamento;
}(Abbonamento));
// prima istanza + console.log
var primoAbbonato = new nuovoAbbonamento(30, 2, 0.2); //credito, numeroChiamate, tariffa
console.log('');
console.log('Primo utente');
console.log('- - - - - - - - - -');
console.log(primoAbbonato);
console.log("Ricarica: ".concat(primoAbbonato.ricarica(20), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(primoAbbonato.chiamata(15), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(primoAbbonato.numero404(20, 15), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(primoAbbonato.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(primoAbbonato.azzeraChiamate()));
// prima istanza + console.log
var secondoAbbonato = new nuovoAbbonamento(30, 2, 0.4); //credito, numeroChiamate, tariffa
console.log('');
console.log('Secondo utente');
console.log('- - - - - - - - - -');
console.log(secondoAbbonato);
console.log("Ricarica: ".concat(secondoAbbonato.ricarica(20), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(secondoAbbonato.chiamata(15), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(secondoAbbonato.numero404(20, 15), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(secondoAbbonato.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(secondoAbbonato.azzeraChiamate()));
// terza istanza + console.log
var terzoAbbonato = new nuovoAbbonamento(30, 2, 0.6); //credito, numeroChiamate, tariffa
console.log('');
console.log('Terzo utente');
console.log('- - - - - - - - - -');
console.log(terzoAbbonato);
console.log("Ricarica: ".concat(terzoAbbonato.ricarica(20), " \u20AC")); //importoRicarica
console.log("Chiamate di ".concat(terzoAbbonato.chiamata(15), " minuti")); //minutiChiamata
console.log("Credito residuo: ".concat(terzoAbbonato.numero404(20, 15), " \u20AC")); //importoRicarica, minutiChiamata
console.log("Numero chiamate: ".concat(terzoAbbonato.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(terzoAbbonato.azzeraChiamate()));
// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON FETCH + SUPER CLASSE E CLASSE ESTESA - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON FETCH + SUPER CLASSE E CLASSE ESTESA - - - - - - - - - - - - - - - ');
// definizione super classe
var Telefonia = /** @class */ (function () {
    function Telefonia(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Telefonia.prototype.ricarica = function (_importoRicarica) {
        return _importoRicarica;
    };
    Telefonia.prototype.chiamata = function (_minutiChiamata) {
        return _minutiChiamata;
    };
    Telefonia.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Telefonia.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Telefonia;
}());
// definizione classe estesa
var telefoniaEstesa = /** @class */ (function (_super) {
    __extends(telefoniaEstesa, _super);
    function telefoniaEstesa(_credito, _numeroChiamate, _tariffa, _utente) {
        var _this = _super.call(this, _credito, _numeroChiamate) || this;
        _this.tariffa = _tariffa;
        _this.utente = _utente;
        return _this;
    }
    telefoniaEstesa.prototype.ricarica = function (_importoRicarica) {
        return _importoRicarica;
    };
    telefoniaEstesa.prototype.chiamata = function (_minutiChiamata) {
        return _minutiChiamata;
    };
    telefoniaEstesa.prototype.numero404 = function (_importoRicarica, _minutiChiamata) {
        return this.credito + this.ricarica(_importoRicarica) - (this.tariffa * this.chiamata(_minutiChiamata) * this.numeroChiamate);
    };
    telefoniaEstesa.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    telefoniaEstesa.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return telefoniaEstesa;
}(Telefonia));
// fetch
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    var promise, utenti, i, nuovaTelefonia;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('utenti.json')];
            case 1:
                promise = _a.sent();
                if (!promise.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, promise.json()];
            case 2:
                utenti = _a.sent();
                console.log(utenti);
                for (i = 0; i < utenti.length; i++) {
                    nuovaTelefonia = new telefoniaEstesa(utenti[i].credito, utenti[i].numeroChiamate, utenti[i].tariffa, utenti[i].utente);
                    console.log('');
                    console.log("".concat(nuovaTelefonia.utente));
                    console.log('- - - - - - - - - -');
                    console.log(nuovaTelefonia);
                    console.log("Ricarica: ".concat(nuovaTelefonia.ricarica(20), " \u20AC")); //importoRicarica
                    console.log("Chiamate di ".concat(nuovaTelefonia.chiamata(15), " minuti")); //minutiChiamata
                    console.log("Credito residuo: ".concat(nuovaTelefonia.numero404(20, 15), " \u20AC")); //importoRicarica, minutiChiamata
                    console.log("Numero chiamate: ".concat(nuovaTelefonia.getNumeroChiamate()));
                    console.log("Chiamate azzerate: ".concat(nuovaTelefonia.azzeraChiamate()));
                }
                return [3 /*break*/, 4];
            case 3: throw new Error('Richiesta non a buon fine');
            case 4: return [2 /*return*/];
        }
    });
}); };
