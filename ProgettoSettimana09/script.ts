// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON INTERFACCIA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON INTERFACCIA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - ');
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
let primoUtente = new Utente (30, 2); //credito, numeroChiamate
console.log('');
console.log('Primo utente');
console.log('- - - - - - - - - -');
console.log(primoUtente);
console.log(`Ricarica: ${primoUtente.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${primoUtente.chiamata(15)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${primoUtente.numero404(20, 15)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${primoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${primoUtente.azzeraChiamate()}`);

// seconda istanza + console.log
let secondoUtente = new Utente (0, 2); //credito, numeroChiamate
console.log('');
console.log('Secondo utente');
console.log('- - - - - - - - - -');
console.log(secondoUtente);
console.log(`Ricarica: ${secondoUtente.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${secondoUtente.chiamata(10)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${secondoUtente.numero404(20, 10)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${secondoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${secondoUtente.azzeraChiamate()}`);

// terza istanza + console.log
let terzoUtente = new Utente (0, 4); //credito, numeroChiamate
console.log('');
console.log('Terzo utente');
console.log('- - - - - - - - - -');
console.log(terzoUtente);
console.log(`Ricarica: ${terzoUtente.ricarica(10)} €`); //importoRicarica
console.log(`Chiamate di ${terzoUtente.chiamata(5)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${terzoUtente.numero404(10, 5)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${terzoUtente.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${terzoUtente.azzeraChiamate()}`);



// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ASTRATTA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON CLASSE ASTRATTA + 1 CLASSE CON 3 ISTANZE - - - - - - - - - - - - - - - ');
// definizione classe astratta
abstract class Abbonamento {
        credito: number;
        numeroChiamate: number;
        constructor (_credito:number, _numeroChiamate:number) {
            this.credito = _credito;
            this.numeroChiamate = _numeroChiamate;
        }
        abstract ricarica(_importoRicarica:any): any;
        abstract chiamata(_minutiChiamata:any): any;
        abstract numero404(_importoRicarica:any, _minutiChiamata:any): any;
        abstract getNumeroChiamate(): any;
        abstract azzeraChiamate(): any;
}

// definizione classe estesa
class nuovoAbbonamento extends Abbonamento {
    tariffa: number;
    constructor (_credito:number, _numeroChiamate:number, _tariffa:number) {
        super (_credito, _numeroChiamate);
        this.tariffa = _tariffa;
    }
    ricarica(_importoRicarica:number): number {
        return _importoRicarica
    }
    chiamata(_minutiChiamata:number): number {
        return _minutiChiamata
    }
    numero404(_importoRicarica:number, _minutiChiamata:number): number {
        return this.credito + this.ricarica(_importoRicarica) - (this.tariffa * this.chiamata(_minutiChiamata) * this.numeroChiamate)
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }
}

// prima istanza + console.log
let primoAbbonato = new nuovoAbbonamento (30, 2, 0.2); //credito, numeroChiamate, tariffa
console.log('');
console.log('Primo utente');
console.log('- - - - - - - - - -');
console.log(primoAbbonato);
console.log(`Ricarica: ${primoAbbonato.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${primoAbbonato.chiamata(15)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${primoAbbonato.numero404(20, 15)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${primoAbbonato.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${primoAbbonato.azzeraChiamate()}`);

// prima istanza + console.log
let secondoAbbonato = new nuovoAbbonamento (30, 2, 0.4); //credito, numeroChiamate, tariffa
console.log('');
console.log('Secondo utente');
console.log('- - - - - - - - - -');
console.log(secondoAbbonato);
console.log(`Ricarica: ${secondoAbbonato.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${secondoAbbonato.chiamata(15)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${secondoAbbonato.numero404(20, 15)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${secondoAbbonato.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${secondoAbbonato.azzeraChiamate()}`);

// terza istanza + console.log
let terzoAbbonato = new nuovoAbbonamento (30, 2, 0.6); //credito, numeroChiamate, tariffa
console.log('');
console.log('Terzo utente');
console.log('- - - - - - - - - -');
console.log(terzoAbbonato);
console.log(`Ricarica: ${terzoAbbonato.ricarica(20)} €`); //importoRicarica
console.log(`Chiamate di ${terzoAbbonato.chiamata(15)} minuti`); //minutiChiamata
console.log(`Credito residuo: ${terzoAbbonato.numero404(20, 15)} €`); //importoRicarica, minutiChiamata
console.log(`Numero chiamate: ${terzoAbbonato.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${terzoAbbonato.azzeraChiamate()}`);



// - - - - - - - - - - - - - - - - - - - - SOLUZIONE CON FETCH + SUPER CLASSE E CLASSE ESTESA - - - - - - - - - - - - - - - 
console.log('');
console.log('- - - - - - - - - - - - - - - SOLUZIONE CON FETCH + SUPER CLASSE E CLASSE ESTESA - - - - - - - - - - - - - - - ');
// definizione super classe
class Telefonia {
    credito: number;
    numeroChiamate: number;
    constructor (_credito:number, _numeroChiamate:number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(_importoRicarica:number): number {
        return _importoRicarica
    }
    chiamata(_minutiChiamata:number): number {
        return _minutiChiamata
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }
}

// definizione classe estesa
class telefoniaEstesa extends Telefonia {
tariffa: number;
utente: string;
constructor (_credito:number, _numeroChiamate:number, _tariffa:number, _utente:string) {
    super (_credito, _numeroChiamate);
    this.tariffa = _tariffa;
    this.utente = _utente
}
ricarica(_importoRicarica:number): number {
    return _importoRicarica
}
chiamata(_minutiChiamata:number): number {
    return _minutiChiamata
}
numero404(_importoRicarica:number, _minutiChiamata:number): number {
    return this.credito + this.ricarica(_importoRicarica) - (this.tariffa * this.chiamata(_minutiChiamata) * this.numeroChiamate)
}
getNumeroChiamate(): number {
    return this.numeroChiamate
}
azzeraChiamate(): number {
    return this.numeroChiamate = 0
}
}

// fetch
window.onload = async () => {
    let promise = await fetch('utenti.json');
        if (promise.ok) {
            let utenti = await promise.json();
            console.log(utenti);
            for(let i = 0; i < utenti.length; i++) {
                let nuovaTelefonia = new telefoniaEstesa(utenti[i].credito, utenti[i].numeroChiamate, utenti[i].tariffa, utenti[i].utente);
                console.log('');
                console.log(`${nuovaTelefonia.utente}`);
                console.log('- - - - - - - - - -');
                console.log(nuovaTelefonia);
                console.log(`Ricarica: ${nuovaTelefonia.ricarica(20)} €`); //importoRicarica
                console.log(`Chiamate di ${nuovaTelefonia.chiamata(15)} minuti`); //minutiChiamata
                console.log(`Credito residuo: ${nuovaTelefonia.numero404(20, 15)} €`); //importoRicarica, minutiChiamata
                console.log(`Numero chiamate: ${nuovaTelefonia.getNumeroChiamate()}`);
                console.log(`Chiamate azzerate: ${nuovaTelefonia.azzeraChiamate()}`);
            }
        } else {
            throw new Error('Richiesta non a buon fine')
        }
}