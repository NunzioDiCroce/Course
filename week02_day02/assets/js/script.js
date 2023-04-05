/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('primaRisposta').innerHTML = 'Vengono di seguito descritti i diversi datatype JavaScript:<br>String: è il tipo di dato utile a gestire un testo;<br>Number: è il tipo di dato utile a gestire un numero;<br>Boolean: è il tipo di dato utile a gestire il risultato di un controllo vero/falso;<br>Undefined: tipo di dato da non confondere con lo zero, esiste per gestire una assenza voluta di identificazione; <br>Null: tipo di dato da non confondere con Undefined (quindi con zero), esiste per gestire una assenza NON voluta di identificazione.'


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var nome = 'Nunzio';
document.getElementById('secondaRisposta').innerHTML = 'Ho creato una variabile chiamata nome ed ho assegnato il valore ' + nome + ' con datatype string.';


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var primoNumero = 12;
var secondoNumero = 20;
var somma = primoNumero + secondoNumero;
document.getElementById('terzaRisposta').innerHTML = 'Ho definito una prima variabile assegnando il valore ' + primoNumero + ' con datatype number;<br> Ho definito una seconda variabile assegnando il valore ' + secondoNumero + ' con datatype number;<br>Infine ho definito una terza variabile assegnando come valore la somma delle prime due variabili ovvero ' + somma +'.';


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
document.getElementById('quartaRisposta').innerHTML = 'Ho creato una variabile chiamata x ed ho assegnato il valore ' + x + ' con datatype number.';


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var cognome = 'Di Croce';
nome = cognome;
document.getElementById('quintaRisposta').innerHTML = 'Ho riassegnato un nuovo valore alla prima variabile nome assegnando il valore ' + nome + ' con datatype string.';


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var sottraendo = 4;
var differenza = x - sottraendo;
document.getElementById('sestaRisposta').innerHTML = 'Ho definito una nuova variabile assegnando il valore ' + sottraendo + ' con datatype number ed ho effettuato la sottrazione rispetto a ' + x + ';<br>La differenza è pari a ' + differenza + '.';


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name1;
var name2;
function assegna() {
  name1 = 'john';
  name2 = 'John';
  document.getElementById('settimaRisposta').innerHTML = 'Ho creato una prima variabile con valore ' + name1 + ' ed una seconda variabile con valore ' + name2 + '.';
}
assegna();

var esitoTest;
function primaVerifica() {
  primoEsito = (name1 == name2) ? 'uguglianza TRUE' : 'uguaglianza FALSE';
  document.getElementById('settimaRispostaPrimaVerifica').innerHTML = 'I valori assegnati alle due variabili ( ' + name1 + ' e ' + name2 + ' ) ' + 'restituiscono una ' + primoEsito + '.';
}
primaVerifica();

var lowercase = name2.toLowerCase();
document.getElementById('settimaRispostaSecondaVerifica').innerHTML = lowercase;
function secondaVerifica() {
  secondoEsito = (name1 == lowercase) ? 'uguaglianza TRUE' : 'uguaglianza FALSE';
  document.getElementById('settimaRispostaSecondaVerifica').innerHTML = 'Definendo poi una seconda variabile senza cambiare il valore di name2 ma utilizzando il metodo toLowerCase, ' + name2 + ' è diventato ' + lowercase + '. In questo modo otteniamo   una ' + secondoEsito + '.'
}
secondaVerifica();