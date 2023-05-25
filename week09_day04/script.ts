// definizione classe "Capo"
class Capo {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoIvaEsclusa:number;
    prezzoIvaInclusa:number;
    disponibile:string;
    saldo:number;
    constructor(_id:number, _codprod:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoIvaEsclusa:number, _prezzoIvaInclusa:number, _disponibile:string, _saldo:number) {
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
    getSaldoCapo():number {
        return (this.saldo/100) * this.prezzoIvaInclusa
    }
    getAcquistoCapo():number {
        return this.prezzoIvaInclusa - this.getSaldoCapo()
    }
}

// - - - - - - - - - - - - - - - SOLUZIONE ISTANZE A MANO
console.log('- - - - - - - - - - SOLUZIONE ISTANZE A MANO');
// istanze (oggetti) di classe "Capo"
// istanza 1
let capoA = new Capo (1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45)
console.log(capoA);
console.log('Saldo capo = ' + capoA.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoA.getAcquistoCapo() + '€');
// istanza 2
let capoB = new Capo (2, 4111, 'estate', 't-shirt', 1231, 6, 'rosso', 5.50, 6.71, 'magazzino', 30)
console.log(capoB);
console.log('Saldo capo = ' + capoB.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoB.getAcquistoCapo() + '€');
// istanza 3
let capoC = new Capo (3, 1181, 'inverno', 'felpa', 1229, 8, 'beige', 17.50, 21.35, 'negozio', 50)
console.log(capoC);
console.log('Saldo capo = ' + capoC.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoC.getAcquistoCapo() + '€');
// istanza 4
let capoD = new Capo (4, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50)
console.log(capoD);
console.log('Saldo capo = ' + capoD.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoD.getAcquistoCapo() + '€');
// istanza 5
let capoE = new Capo (5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino', 60)
console.log(capoE);
console.log('Saldo capo = ' + capoE.getSaldoCapo() + '€');
console.log('Acquisto capo = ' + capoE.getAcquistoCapo() + '€');


// - - - - - - - - - - - - - - - SOLUZIONE CON FETCH
console.log('- - - - - - - - - - SOLUZIONE CON FETCH');
window.onload = async () => {
    try {
        let promise = await fetch('Abbigliamento.json');
        if (promise.ok) {
            let capi = await promise.json();
            console.log(capi);
            for(let i = 0; i < capi.length; i++) {
                let capo = new Capo(capi[i].id, capi[i].codprod, capi[i].collezione, capi[i].capo, capi[i].modello, capi[i].quantita,capi[i].colore, capi[i].prezzoIvaEsclusa, capi[i].prezzoIvaInclusa, capi[i].disponibile, capi[i].saldo);
                console.log(capo);
                console.log('Saldo capo = ' + capo.getSaldoCapo() + '€');
                console.log('Acquisto capo = ' + capo.getAcquistoCapo() + '€');
                console.log(typeof capo.getSaldoCapo());
            }
        } else {
            throw new Error('Richiesta non a buon fine')
        }
    }
    catch(error) {
        alert(error)
    }
}
