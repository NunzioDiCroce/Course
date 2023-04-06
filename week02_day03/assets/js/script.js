/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var primoNumero = 345;
var secondoNumero = 538;
document.getElementById('primoNumero').innerHTML = primoNumero;
document.getElementById('secondoNumero').innerHTML = secondoNumero;
if (primoNumero > secondoNumero) {
  document.getElementById('numeroPiuGrande').innerHTML = primoNumero;
} else {
  document.getElementById('numeroPiuGrande').innerHTML = secondoNumero;
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var numeroFornito = 100;
document.getElementById('numero').innerHTML = numeroFornito;
if (numeroFornito !== 5) {
  console.log('not equal to 5');
  document.getElementById('console').innerHTML = 'not equal to 5';
} else {
  console.log('equal to 5');
  document.getElementById('console').innerHTML = 'equal to 5';
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var numero = 2;
document.getElementById('fornito').innerHTML = numero;
if (numero % 5 == 0) {
  document.getElementById('divisibile').innerHTML = 'divisibile per 5';
} else {
  document.getElementById('divisibile').innerHTML = 'NON divisibile per 5';
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var primoIntero = 1;
var secondoIntero = 7;
document.getElementById('primoIntero').innerHTML = primoIntero;
document.getElementById('secondoIntero').innerHTML = secondoIntero;
if (primoIntero === 8 || secondoIntero === 8) {
  document.getElementById('otto').innerHTML = 'almeno un numero è otto';
} else if (primoIntero + secondoIntero === 8 || secondoIntero + primoIntero === 8) {
  document.getElementById('otto').innerHTML = 'nessuno dei due numeri è otto ma la loro addizione è uguale ad otto';
} else if (primoIntero - secondoIntero === 8 || secondoIntero - primoIntero === 8) {
  document.getElementById('otto').innerHTML = 'nessuno dei due numeri è otto ma la loro sottrazione è uguale ad otto';
} else {
  document.getElementById('otto').innerHTML = 'nessuno dei due numeri è otto e neanche la loro addizione/sottrazione è uguale ad otto'
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCard = 51;
var shipping;
var totalAmount;
if (totalShoppingCard > 50) {
  shipping = 0;
  totalAmount = totalShoppingCard + shipping;
} else {
  shipping = 10;
  totalAmount = totalShoppingCard + shipping;
}
document.getElementById('shopping').innerHTML = totalShoppingCard;
document.getElementById('shipping').innerHTML = shipping;
document.getElementById('amount').innerHTML = totalAmount;


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCard2 = 100;
var totalShoppingCard2_discount = 0.8 * totalShoppingCard2;
var shipping2;
var totalAmount2;
if (totalShoppingCard2_discount > 50) {
  shipping2 = 0;
  totalAmount2 = totalShoppingCard2_discount + shipping2;
} else {
  shipping2 = 10;
  totalAmount2 = totalShoppingCard2_discount + shipping2;
}
document.getElementById('shopping2').innerHTML = totalShoppingCard2;
document.getElementById('discunt').innerHTML = totalShoppingCard2_discount;
document.getElementById('shipping2').innerHTML = shipping2;
document.getElementById('amount2').innerHTML = totalAmount2;


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
var prima = 10;
var seconda = 10;
var terza = 30;
document.getElementById('prima').innerHTML = prima;
document.getElementById('seconda').innerHTML = seconda;
document.getElementById('terza').innerHTML = terza;
if (prima > seconda && prima > terza && seconda > terza) {
  document.getElementById('ordine').innerHTML = prima + ' ' + seconda + ' ' + terza;
} else if (seconda > prima && seconda > terza && prima > terza) {
  document.getElementById('ordine').innerHTML = seconda + ' ' + prima + ' ' + terza;
} else if (seconda > prima && seconda > terza && terza > prima) {
  document.getElementById('ordine').innerHTML = seconda + ' ' + terza + ' ' + prima;
} else if (terza > prima && terza > seconda && prima > seconda) {
  document.getElementById('ordine').innerHTML = terza + ' ' + prima + ' ' + seconda;
} else if (terza > prima && terza > seconda && seconda > prima) {
  document.getElementById('ordine').innerHTML = terza + ' ' + seconda + ' ' + prima;
} else {
  document.getElementById('ordine').innerHTML = 'inserire tre variabili diverse';
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var numero2 = 1000;
document.getElementById('fornito2').innerHTML = numero2;
document.getElementById('unNumero').innerHTML = typeof numero2;


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var pariDispari = 109;
document.getElementById('pariDispari').innerHTML = pariDispari;
if (pariDispari % 2 === 0) {
  document.getElementById('pariDispari2').innerHTML = 'pari';
} else {
  document.getElementById('pariDispari2').innerHTML = 'dispari';
}


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
let val = 12;
let messaggio;
if (val < 5) {
    console.log("Meno di 5");
    messaggio = 'Meno di 5';
  } else if (val < 10) {
    console.log("Meno di 10");
    messaggio = 'Meno di 10';
  } else {
    console.log("Uguale a 10 o maggiore");
    messaggio = 'Uguale a 10 o maggiore';
  }
document.getElementById('val').innerHTML = val;
document.getElementById('val2').innerHTML = messaggio;


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
document.getElementById('nome').innerHTML = me.name;
document.getElementById('cognome').innerHTML = me.lastName;
document.getElementById('capacita').innerHTML = me.skills;
document.getElementById('nuovaProprieta').innerHTML = me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me2 = {
  name2: 'John',
  lastName2: 'Doe',
  skills2: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me2.city2 = 'Toronto';
delete me2.lastName2;
document.getElementById('nome2').innerHTML = me2.name2;
document.getElementById('cognome2').innerHTML = me2.lastName2;
document.getElementById('capacita2').innerHTML = me2.skills2;
document.getElementById('nuovaProprieta2').innerHTML = me2.city2;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const me3 = {
  name3: 'John',
  lastName3: 'Doe',
  skills3: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me3.city3 = 'Toronto';
delete me2.lastName2;
me3.skills3.pop();
document.getElementById('nome3').innerHTML = me3.name3;
document.getElementById('cognome3').innerHTML = me3.lastName3;
document.getElementById('capacita3').innerHTML = me3.skills3;
document.getElementById('nuovaProprieta3').innerHTML = me3.city3;


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('valori').innerHTML = array;


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let array2 = [];
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2[9] = 100;
document.getElementById('valori2').innerHTML = array2;