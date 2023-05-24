"use strict";
//definizione ed assegnazione variabile primo giocatore + DOM manipulation
let numeroUno = Math.floor(Math.random() * 100 + 1);
console.log('Numero giocatore A:', numeroUno);
let giocatoreUno = document.getElementById('giocatoreUno');
console.log(giocatoreUno);
giocatoreUno.innerText = numeroUno;
console.log(giocatoreUno.innerText);
console.log('- - - - - - - - - -');
//definizione ed assegnazione variabile secondo giocatore + DOM manipulation
let numeroDue = Math.floor(Math.random() * 100 + 1);
console.log('Numero giocatore B:', numeroDue);
let giocatoreDue = document.getElementById('giocatoreDue');
console.log(giocatoreDue);
giocatoreDue.innerText = numeroDue;
console.log(giocatoreDue.innerText);
console.log('- - - - - - - - - -');
//definizione ed assegnazione variabile numero casuale (da indovinare)
let numeroCasuale = Math.floor(Math.random() * 100 + 1);
console.log('Numero casuale:', numeroCasuale);
let numero = document.getElementById('numero');
console.log(numero);
numero.innerText = numeroCasuale;
console.log(numero.innerText);
console.log('- - - - - - - - - -');
//definizione ed assegnazione variabili delta utili a capire quale giocatore si è avvicinato
let deltaUno = Math.abs(numeroUno - numeroCasuale);
console.log('deltaUno:', deltaUno);
let deltaDue = Math.abs(numeroDue - numeroCasuale);
console.log('deltaDue:', deltaDue);
console.log('- - - - - - - - - -');
//ciclo if per verificare e restituire l'esito della lotteria
let feedback = document.getElementById('feedback');
if (numeroUno !== numeroDue && numeroUno === numeroCasuale) {
    console.log('Il giocatore A ha indovinato il numero casuale.');
    feedback.innerText = 'Il giocatore A ha indovinato il numero casuale.';
}
else if (numeroUno !== numeroDue && numeroDue === numeroCasuale) {
    console.log('Il giocatore B ha indovinato il numero casuale.');
    feedback.innerText = 'Il giocatore B ha indovinato il numero casuale.';
}
else if (numeroUno !== numeroDue && deltaUno < deltaDue) {
    console.log('Nessun giocatore ha indovinato il numero casuale ma il giocatore A si è avvicinato di più.');
    feedback.innerText = 'Nessun giocatore ha indovinato il numero casuale ma il giocatore A si è avvicinato di più.';
}
else if (numeroUno !== numeroDue && deltaDue < deltaUno) {
    console.log('Nessun giocatore ha indovinato il numero casuale ma il giocatore B si è avvicinato di più.');
    feedback.innerText = 'Nessun giocatore ha indovinato il numero casuale ma il giocatore B si è avvicinato di più.';
}
else if (numeroUno === numeroDue && numeroUno === numeroCasuale) {
    console.log('Entrambi i giocatori hanno indovinato il numero casuale.');
    feedback.innerText = 'Entrambi i giocatori hanno indovinato il numero casuale.';
}
else if (numeroUno === numeroDue && numeroUno !== numeroCasuale) {
    console.log('I giocatori hanno espresso lo stesso numero ma non hanno indovinato.');
    feedback.innerText = 'I giocatori hanno espresso lo stesso numero ma non hanno indovinato.';
}
