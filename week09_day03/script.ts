// - - - - - - - - - - - - - - - SOLUZIONE CON UNA CLASSE
console.log('- - - - - - - - - - SOLUZIONE CON UNA CLASSE')
// definizione classe Lavoratore
class Lavoratore {
    codRedd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;
    constructor(_codRedd:number, _redditoAnnuoLordo:number, _tasseInps:number, _tasseIrpef:number) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef
    }
    getUtileTasse(codRedd:number, redditoAnnuoLordo:number) {
        return (codRedd/100) * redditoAnnuoLordo
    }
    getTasseInps(tasseInps:number) {
        return (tasseInps/100) * this.getUtileTasse(this.codRedd, this.redditoAnnuoLordo)
    }
    getTasseIrpef(tasseIrpef:number) {
        return (tasseIrpef/100) * this.getUtileTasse(this.codRedd, this.redditoAnnuoLordo)
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps(this.tasseInps) - this.getTasseIrpef(this.tasseIrpef)
    }
}

// definizione variabili di input per simulazione
let codRedd_input:number = 80;
let redditoAnnuoLordo_input:number = 100000;
let tasseInps_input:number = 20;
let tasseIrpef_input:number = 20;

// istanza classe Lavoratore + console.log
let lavoratore = new Lavoratore (codRedd_input, redditoAnnuoLordo_input, tasseInps_input, tasseIrpef_input);
console.log('Codice redditività: ' + lavoratore.codRedd + '%');
console.log('Reddito annuo lordo: ' + lavoratore.redditoAnnuoLordo + ' €');
console.log('Imponibile annuo: ' + lavoratore.getUtileTasse(codRedd_input, redditoAnnuoLordo_input) + ' €');
console.log('Inps: ' + lavoratore.tasseInps +'%' + ' ovvero ' + lavoratore.getTasseInps(tasseInps_input) + ' €');
console.log('Irpef: ' + lavoratore.tasseIrpef +'%' + ' ovvero ' + lavoratore.getTasseIrpef(tasseIrpef_input) + ' €');
console.log('Reddito annuo netto: ' + lavoratore.getRedditoAnnuoNetto() + ' €');



// - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ABSTRACT
console.log('- - - - - - - - - - SOLUZIONE CON CLASSE ABSTRACT')
// definizione classe astratta Contribuente
abstract class Contribuente {
    codice:number;
    reddito:number;
    inps:number;
    irpef:number;
    constructor(_codice:number, _reddito:number, _inps:number, _irpef:number) {
        this.codice = _codice;
        this.reddito = _reddito;
        this.inps = _inps;
        this.irpef = _irpef
    }
    abstract getImponibile();
    abstract getInps();
    abstract getIrpef();
    abstract getUtile();
}

// definizione classe Dipendente come estensione di Contribuente
class Dipendente extends Contribuente {
    constructor(_codice:number, _reddito:number, _inps:number, _irpef:number) {
        super(_codice, _reddito, _inps, _irpef)
    }
    getImponibile() {
        return (this.codice/100) * this.reddito
    }
    getInps() {
        return (this.inps/100) * this.getImponibile()
    }
    getIrpef() {
        return (this.irpef/100) * this.getImponibile()
    }
    getUtile() {
        return this.reddito - this.getInps() - this.getIrpef()
    }
}

// istanza classe Lavoratore + console.log
let dipendente = new Dipendente (70, 200000, 10, 10);
console.log('Codice redditività: ' + dipendente.codice + '%');
console.log('Reddito annuo lordo: ' + dipendente.reddito + ' €');
console.log('Imponibile annuo: ' + dipendente.getImponibile() + ' €');
console.log('Inps: ' + dipendente.inps +'%' + ' ovvero ' + dipendente.getInps() + ' €');
console.log('Irpef: ' + dipendente.irpef +'%' + ' ovvero ' + dipendente.getIrpef() + ' €');
console.log('Reddito annuo netto: ' + dipendente.getUtile() + ' €');



// - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ESTESA
console.log('- - - - - - - - - - SOLUZIONE CON CLASSE ESTESA')
// definizione classe Cittadino
class Cittadino {
    reddito:number;
    inps:number;
    irpef:number;
    constructor(_reddito:number, _inps:number, _irpef:number) {
        this.reddito = _reddito;
        this.inps = _inps;
        this.irpef = _irpef
    }
    getImponibile(codice:number) {
        return (codice/100) * this.reddito
    }
    getInps(codice:number) {
        return (this.inps/100) * this.getImponibile(codice)
    }
    getIrpef(codice:number) {
        return (this.irpef/100) * this.getImponibile(codice)
    }
    getUtile(codice:number) {
        return this.reddito - this.getInps(codice) - this.getIrpef(codice)
    }
}

// definizione classe CittadinoTipoA come estensione di Cittadino
class CittadinoTipoA extends Cittadino {
    codice:number;
    constructor(_codice:number, _reddito:number, _inps:number, _irpef:number) {
        super( _reddito, _inps, _irpef)
        this.codice = _codice
    }
    getImponibile(codice:number) {
        return (codice/100) * this.reddito
    }
    getInps(codice:number) {
        return (this.inps/100) * this.getImponibile(codice)
    }
    getIrpef(codice:number) {
        return (this.irpef/100) * this.getImponibile(codice)
    }
    getUtile(codice:number) {
        return this.reddito - this.getInps(codice) - this.getIrpef(codice)
    }
}

// definizione variabili di input per simulazione classe estesa
let codiceA:number = 90;

// istanza classe CittadinoTipoA + console.log
let cittadinoTipoA = new CittadinoTipoA (codiceA, 10000, 5, 5);
console.log('Simulazione Cittadino Tipo A')
console.log('Codice redditività: ' + cittadinoTipoA.codice + '%');
console.log('Reddito annuo lordo: ' + cittadinoTipoA.reddito + ' €');
console.log('Imponibile annuo: ' + cittadinoTipoA.getImponibile(codiceA) + ' €');
console.log('Inps: ' + cittadinoTipoA.inps +'%' + ' ovvero ' + cittadinoTipoA.getInps(codiceA) + ' €');
console.log('Irpef: ' + cittadinoTipoA.irpef +'%' + ' ovvero ' + cittadinoTipoA.getIrpef(codiceA) + ' €');
console.log('Reddito annuo netto: ' + cittadinoTipoA.getUtile(codiceA) + ' €');