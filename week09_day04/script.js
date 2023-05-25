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
// definizione classe "Capo"
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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON ISTANZE A MANO
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON ISTANZE A MANO');
// istanze (oggetti) di classe "Capo"
// istanza 1
var capoA = new Capo(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45);
console.log(capoA);
console.log('Saldo capo = ' + capoA.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoA.getAcquistoCapo() + '€');
// istanza 2
var capoB = new Capo(2, 4111, 'estate', 't-shirt', 1231, 6, 'rosso', 5.50, 6.71, 'magazzino', 30);
console.log(capoB);
console.log('Saldo capo = ' + capoB.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoB.getAcquistoCapo() + '€');
// istanza 3
var capoC = new Capo(3, 1181, 'inverno', 'felpa', 1229, 8, 'beige', 17.50, 21.35, 'negozio', 50);
console.log(capoC);
console.log('Saldo capo = ' + capoC.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoC.getAcquistoCapo() + '€');
// istanza 4
var capoD = new Capo(4, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50);
console.log(capoD);
console.log('Saldo capo = ' + capoD.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoD.getAcquistoCapo() + '€');
// istanza 5
var capoE = new Capo(5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino', 60);
console.log(capoE);
console.log('Saldo capo = ' + capoE.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoE.getAcquistoCapo() + '€');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON FETCH
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON FETCH');
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    var promise, capi, i, capo, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, fetch('Abbigliamento.json')];
            case 1:
                promise = _a.sent();
                if (!promise.ok) return [3 /*break*/, 3];
                return [4 /*yield*/, promise.json()];
            case 2:
                capi = _a.sent();
                console.log(capi);
                for (i = 0; i < capi.length; i++) {
                    capo = new Capo(capi[i].id, capi[i].codprod, capi[i].collezione, capi[i].capo, capi[i].modello, capi[i].quantita, capi[i].colore, capi[i].prezzoIvaEsclusa, capi[i].prezzoIvaInclusa, capi[i].disponibile, capi[i].saldo);
                    console.log(capo);
                    console.log('Saldo capo = ' + capo.getSaldoCapo() + '€');
                    console.log('Acquisto capo = ' + capo.getAcquistoCapo() + '€');
                    console.log(typeof capo.getSaldoCapo());
                }
                return [3 /*break*/, 4];
            case 3: throw new Error('Richiesta non a buon fine');
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                alert(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
