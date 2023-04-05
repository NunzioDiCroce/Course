/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var primoNumero;
var secondoNumero;
var terzoNumero;
function numeroPiuGrande() {
  primoNumero = 7;
  secondoNumero = 6;
  terzoNumero = ( primoNumero > secondoNumero ) ? primoNumero : secondoNumero;
  console.log(terzoNumero);
}
numeroPiuGrande();


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numeroIntero;
var esito;
function notEqual() {
  numeroIntero = 10;
  esito = !( numeroIntero == 5 ) ? 'not equal' : 'equal';
  console.log(esito);
}
notEqual();


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var dividendo;
var divisore;
var risultato;
function divisibile() {
  dividendo = 13;
  divisore = 5;
  risultato = ( dividendo % divisore == 0 ) ? 'divisibile per 5' : 'non divisibile per 5';
  console.log(risultato);
}
divisibile();


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var numeroUno = 9;
var numeroDue = 8;
if( numeroUno == 8 || numeroDue == 8 ) {
  console.log('almeno uno dei due numeri è 8');
} else if ( numeroUno + numeroDue == 8 ) {
  console.log('la somma dei due numeri è 8');
} else if ( numeroUno - numeroDue == 8 ) {
  console.log('la differenza dei due numeri è 8');
} else {
  console.log('nessuna condizione')
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCard = 51;
var shippingAmount;
var totalAmount;
if ( totalShoppingCard > 50 ) {
  shippingAmount = 0;
} else {
  shippingAmount = 10;
}
function total() {
  totalAmount = totalShoppingCard + shippingAmount;
  console.log(totalAmount);
}
total();


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCard2 = 50;
var discount = 0.8;
var totalShoppingCard2_discount = discount * shippingAmount2;
var shippingAmount2;
var totalAmount2;
if ( totalShoppingCard2_discount > 50 ) {
  shippingAmount2 = 0;
} else {
shippingAmount2 = 10;
}
function total2() {
  totalAmount2 = totalShoppingCard2_discount + shippingAmount2;
  console.log(totalAmount2);
}
total2();


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var primaVariabile = 10;
var secondaVariabile = 100;
var terzaVariabile = 4;
if (primaVariabile > secondaVariabile && primaVariabile > terzaVariabile && secondaVariabile > terzaVariabile) {
  console.log(primaVariabile + ',' + secondaVariabile + ',' + terzaVariabile);
} else if (secondaVariabile > primaVariabile && secondaVariabile > terzaVariabile && primaVariabile > terzaVariabile) {
  console.log(secondaVariabile + ',' + primaVariabile + ',' + terzaVariabile);
} else if (secondaVariabile > primaVariabile && secondaVariabile > terzaVariabile && terzaVariabile > primaVariabile) {
  console.log(secondaVariabile + ',' + terzaVariabile + ',' + primaVariabile);
} else if (terzaVariabile > secondaVariabile && terzaVariabile > primaVariabile && secondaVariabile > primaVariabile) {
  console.log(terzaVariabile + ',' + secondaVariabile + ',' + primaVariabile);
} else {
  console.log(terzaVariabile + ',' + primaVariabile + ',' + secondaVariabile);
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var valore = 13;
function valoreNumero() {
  console.log(typeof valore);
}
valoreNumero();


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var dividendo2;
var divisore2;
var risultato2;
function pariDispari() {
  dividendo2 = 20;
  divisore2 = 2;
  risultato2 = ( dividendo2 % divisore2 == 0 ) ? 'pari' : 'dispari';
  console.log(risultato2);
}
pariDispari();


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let val = 11;
if (val < 5 && val < 10) {
  console.log("Meno di 5");
} else if (val > 5 && val < 10) {
  console.log("Meno di 10");
} else if (val > 5 && val > 10) {
  console.log("Più di dieci");
} else if (val == 5) {
  console.log("Uguale a 5");
} else if (val == 10) {
  console.log("Uguale a 10");
} 


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
console.log(me.city);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const me2 = {
  name2: 'John',
  lastName2: 'Doe',
  skills2: ['javascript', 'html', 'css'],
}
me2.city2 = 'Toronto';
console.log(me2.city2);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
