
// definizione interfaccia
interface Abbonato {
    // proprietà interfaccia
    credito: number;
    numeroChiamate: number;
    // metodi interfaccia
    ricarica(_importoRicarica:number): number;
    chiamata(_minutiChiamata:number): number;
    numero404(_importoRicarica:number, _minutiChiamata:number): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): number;
}

// definizione classe
class Utente implements Abbonato {
    credito: number;
    numeroChiamate: number;
    constructor(_credito:number, _numeroChiamate:number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(_importoRicarica:number): number {
        return _importoRicarica
    }
    chiamata(_minutiChiamata:number): number {
        return _minutiChiamata
    }
    numero404(_importoRicarica:number, _minutiChiamata:number): number {
        return this.credito + this.ricarica(_importoRicarica) - (0.2 * this.chiamata(_minutiChiamata) * this.numeroChiamate)
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }
}

// prima istanza + console.log
let primoUtente = new Utente (20, 2); //credito, numeroChiamate
console.log('')
console.log('PRIMO UTENTE')
console.log('- - - - - - - - - -')
console.log(primoUtente);
console.log(`Ricarica: ${primoUtente.ricarica(30)} €`); //importoRicarica
console.log(`Chiamate di ${primoUtente.chiamata(15)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${primoUtente.numero404(30, 15)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${primoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${primoUtente.azzeraChiamate()}`);

// seconda istanza + console.log
let secondoUtente = new Utente (0, 2); //credito, numeroChiamate
console.log('')
console.log('SECONDO UTENTE')
console.log('- - - - - - - - - -')
console.log(secondoUtente);
console.log(`Ricarica: ${secondoUtente.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${secondoUtente.chiamata(10)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${secondoUtente.numero404(20, 10)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${secondoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${secondoUtente.azzeraChiamate()}`);

// terza istanza + console.log
let terzoUtente = new Utente (0, 4); //credito, numeroChiamate
console.log('')
console.log('TERZO UTENTE')
console.log('- - - - - - - - - -')
console.log(terzoUtente);
console.log(`Ricarica: ${terzoUtente.ricarica(10)} €`); //importoRicarica
console.log(`Chiamate di ${terzoUtente.chiamata(5)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${terzoUtente.numero404(10, 5)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${terzoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${terzoUtente.azzeraChiamate()}`);



