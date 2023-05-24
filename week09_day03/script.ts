// - - - - - - - - - - - - - - - SOLUZIONE 1 - - - - - - - - - -
console.log('- - - - - - - - - - SOLUZIONE 1 - - - - - - - - - -')
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



// - - - - - - - - - - - - - - - SOLUZIONE 2 - - - - - - - - - -
console.log('- - - - - - - - - - SOLUZIONE 2 - - - - - - - - - -')