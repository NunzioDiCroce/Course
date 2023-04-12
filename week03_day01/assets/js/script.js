/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var l1;
var l2;
function area (l1, l2) {
    var a = l1*l2;
    return a;
}
var result1 = area(10,10);
console.log(result1);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var n1;
var n2;
function crazySum (n1, n2) {
    if (n1 !== parseInt(n1) || n2 !== parseInt(n2)) {
        console.log('Esercizio2: Inserire numeri interi!');
        return
    } else {
        if (n1!==n2) {
            var somma = n1+n2;
            return somma;
        } else {
            somma = (n1+n2)*3;
            return somma;
        }
    }
    }
var result2 = crazySum (20,20);
console.log(result2);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var par;
function crazyDiff (par) {
    if (par<19) {
        return Math.abs(par-19);
    } else {
        return (Math.abs(par-19)*3);
    }
}
console.log(crazyDiff (20));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var par4;
function boundary (par4) {
    if (par4 !== parseInt(par4)) {
        console.log('Esercizio4: Scrivere un numero intero!')
    } else {
        if (par4>=20 && par4<=100 || par4===400) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
boundary (21);


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var a;
function epify (a) {
    if (typeof a !== 'string') {
        console.log('Esercizio5: Inserire una stringa!')
    } else {
        if (a.substring(0,7)==='EPICODE') {
            console.log(a);
        } else {
            var aNew = 'EPICODE '+a;
            console.log(aNew);
        }
    }
}
epify ('Questa stringa non comincia con "EPICODE"');


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var pos;
function check3and7 (pos) {
    if (pos!==parseInt(pos) || pos <=0) {
        console.log('Esercizio6: Si accettano solo numeri interi positivi!')
    } else {
        if (pos%3===0 || pos%7===0) {
            console.log('Esercizio6: Il numero fornito è divisibile per 3 o per 7')
        } else {
            console.log('Esercizio6: Il numero fornito non è divisibile ne per 3 ne per 7')
    }
}
}
check3and7 (3);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var stringa;
function reverseString (stringa) {
    var splitStringa = stringa.split('');
    var reverseArray = splitStringa.reverse();
    var joinArray = reverseArray.join('');
    return joinArray
}
console.log(reverseString('EPICODE'));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var stringa8;
function upperFirst (stringa8) {
    var stringa8Split = stringa8.split(' ');
    for (i=0; i<stringa8Split.length; i++) {
        stringa8Split[i] = stringa8Split[i].charAt(0).toUpperCase()+stringa8Split[i].slice(1);
    }
    var stringa8join = stringa8Split.join(' ');
    return stringa8join
}
console.log(upperFirst('full stack web developer course'));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var stringa9;
function cutString (stringa9) {
    var stringa9Split = stringa9.split('');
    stringa9Split.shift();
    stringa9Split.pop();
    var stringa9Split2 = stringa9Split;
    var stringa9join = stringa9Split2.join ('');
    return stringa9join
}
console.log(cutString('full stack web developer course'));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var n;
function giveMeRandom (n) {
    if (n<0 || n>10) {
        console.log('Esercizio10: Fornire un numero compreso tra 0 e 10!');
    } else {
        let randomArray = [];
        for (i=0; i<n;i++) {
            randomArray.push(Math.floor(Math.random()*11));
        }
        console.log(randomArray);
    }
}
giveMeRandom (7);