
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/



// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO A - - - - - - - - -')

var sum;
var valore1 = 10;
var valore2 = 20;
funzioneA = () => { sum = valore1 + valore2 }
funzioneA();
console.log(`valore1 = ${valore1}, valore2 = ${valore2}, sum = ${sum}`);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO B - - - - - - - - -')

var random;
funzioneB = () => { random = Math.ceil(Math.random()*20) }
funzioneB();
console.log(`il valore random generato è ${random}`);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome,
  age = la tua età.
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO C - - - - - - - - -')

var me = {
  name: 'Nunzio',
  surname: 'Di Croce',
  age: '38'
}
console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO D - - - - - - - - -')

removeAge = () => { delete me.age }
removeAge();
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i
  linguaggi di programmazione che conosci.
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO E - - - - - - - - -')

addSkills = () => { me.skills = ['un po di HTML', 'un po di CSS'] }
addSkills();
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO F - - - - - - - - -')

addSkillsArray = () => { me.skills.push('un po di JS') }
addSkillsArray();
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('- - - - - - - - - JS Basic : ESERCIZIO G - - - - - - - - -')

removeSkillsArray = () => { me.skills.pop() }
removeSkillsArray();
console.log(me);



// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 1 - - - - - - - - -')

dice = () => { random = Math.ceil(Math.random()*6) }
dice();
console.log(`dice number is : ${random}`);


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 2 - - - - - - - - -')
var maggiore;
whoIsBigger = (parametro1, parametro2) => { maggiore = Math.max(parametro1, parametro2) }
whoIsBigger(10, 30);
console.log(`il maggiore tra i due parametri è : ${maggiore}`);


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 3 - - - - - - - - -')

splitMe = (stringa3) => { stringa3New = stringa3.split(' ') }
splitMe('I am studying to become a good full stack web developer');
console.log(stringa3New);


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 4 - - - - - - - - -')

var stringa4New;
function deleteOne (stringa4, parametro) {
  if (parametro) {
    stringa4New = stringa4.substring(1);
    console.log(`la stringa diventa : "${stringa4New}"`);
  } else {
    stringa4New = stringa4.substring(0,stringa4.length-1);
    console.log(`la stringa diventa : "${stringa4New}"`);
  }
}
deleteOne('I am studying to become a good full stack web developer', true);


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 5 - - - - - - - - -')

var stringa5;
function onlyLetters (stringa) {
  stringa5 = stringa.replace(/[0-9]/g, '')
}
onlyLetters ('I have 4 dogs and 2 cats');
console.log(`la stringa diventa : "${stringa5}"`);


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 6 - - - - - - - - -')

var mailVerifica;
function isThisAnEmail (mail) {
  var regex_email_valida = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mailVerifica = regex_email_valida.test(mail);
}
isThisAnEmail('miaMail@.');
console.log('mail: miaMail@.');
if (mailVerifica === true) {
  console.log('formato mail corretto')
} else {
  console.log('inserire un indirizzo mail valido!')
}


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 7 - - - - - - - - -')

function whatDayIsIt () {
  var today = new Date();
  var weekDay = today.getDay();
  if (weekDay === 1) {
    console.log('Buongiorno, oggi è lunedì')
  } else if (weekDay === 2) {
    console.log('Buongiorno, oggi è martedì')
  } else if (weekDay === 3) {
    console.log('Buongiorno, oggi è mercoledì')
  } else if (weekDay === 4) {
    console.log('Buongiorno, oggi è giovedì')
  } else if (weekDay === 5) {
    console.log('Buongiorno, oggi è venerdì')
  } else if (weekDay === 6) {
    console.log('Buongiorno, oggi è sabato')
  } else if (weekDay === 7) {
    console.log('Buongiorno, oggi è domenica')
  }
}
whatDayIsIt();


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente
  una proprietà "sum": il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 8 - - - - - - - - -')



/*dice = () => { random = Math.ceil(Math.random()*6) }
dice();
console.log(`dice number is : ${random}`);*/



/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 9 - - - - - - - - -')

function howManyDays (parametro) {
  var data = new Date(parametro);
  console.log(`la data scelta è : ${data}`);
  var today = new Date();
  var giorni = Math.floor(Math.abs((today - data)/(1000*60*60*24)));
  console.log(`la differenza rispetto ad oggi è di ${giorni} giorni`);
}
howManyDays ('April 10, 2023 00:41:00');


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('- - - - - - - - - Funzioni : ESERCIZIO 10 - - - - - - - - -')

function isTodayMyBirthday () {
  var compleanno = new Date('July 14, 2023');
  var compleannoDay = compleanno.getDate();
  var compleannoMonth = compleanno.getMonth();
  var compleannoMonth2;
  if (compleannoMonth === 0) {
    compleannoMonth2 = 'Gennaio'
  } else if (compleannoMonth === 1) {
    compleannoMonth2 = 'Febbraio'
  } else if (compleannoMonth === 2) {
    compleannoMonth2 = 'Marzo'
  } else if (compleannoMonth === 3) {
    compleannoMonth2 = 'Aprile'
  } else if (compleannoMonth === 4) {
    compleannoMonth2 = 'Maggio'
  } else if (compleannoMonth === 5) {
    compleannoMonth2 = 'Giugno'
  } else if (compleannoMonth === 6) {
    compleannoMonth2 = 'Luglio'
  } else if (compleannoMonth === 7) {
    compleannoMonth2 = 'Agosto'
  } else if (compleannoMonth === 8) {
    compleannoMonth2 = 'Settembre'
  } else if (compleannoMonth === 9) {
    compleannoMonth2 = 'Ottobre'
  } else if (compleannoMonth === 10) {
    todayMonth2 = 'Novembre'
  } else if (compleannoMonth === 11) {
    compleannoMonth2 = 'Dicembre'
  }
  console.log(`compleanno : ${compleannoDay} ${compleannoMonth2}`);

  var today = new Date();
  var todayDay = today.getDate();
  var todayMonth = today.getMonth();
  var todayMonth2;
  if (todayMonth === 0) {
    todayMonth2 = 'Gennaio'
  } else if (todayMonth === 1) {
    todayMonth2 = 'Febbraio'
  } else if (todayMonth === 2) {
    todayMonth2 = 'Marzo'
  } else if (todayMonth === 3) {
    todayMonth2 = 'Aprile'
  } else if (todayMonth === 4) {
    todayMonth2 = 'Maggio'
  } else if (todayMonth === 5) {
    todayMonth2 = 'Giugno'
  } else if (todayMonth === 6) {
    todayMonth2 = 'Luglio'
  } else if (todayMonth === 7) {
    todayMonth2 = 'Agosto'
  } else if (todayMonth === 8) {
    todayMonth2 = 'Settembre'
  } else if (todayMonth === 9) {
    todayMonth2 = 'Ottobre'
  } else if (todayMonth === 10) {
    todayMonth2 = 'Novembre'
  } else if (todayMonth === 11) {
    todayMonth2 = 'Dicembre'
  }
  console.log(`oggi è il ${todayDay} ${todayMonth2}`);

  var result = (compleannoDay === todayDay && compleannoMonth2 === todayMonth2);
  if (result) {
    console.log(`${result} , oggi è il tuo compleanno`)
  } else {
    console.log(`${result} , oggi non è il tuo compleanno`)
  }
}
isTodayMyBirthday();



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri;
  deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 11 - - - - - - - - -')


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 12 - - - - - - - - -')

function newestMovie () {
  var anni = [];
  for (let i = 0; i < movies.length; i++) {
    anni.push(parseInt(movies[i].Year));
  }
  var annoMax = Math.max (...anni);
  var piuRecente = [];
  for (i=0; i<movies.length; i++) {
    var moviesObject = movies[i];
    if (moviesObject.Year == annoMax.toString()) {
      piuRecente.push(moviesObject.Title, moviesObject.Year);
    }
  }
  console.log(piuRecente);
  }
  newestMovie();


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 13 - - - - - - - - -')

var numero;
function countMovies () {
  numero = movies.length;
}
countMovies();
console.log(`i film contenuti nell'array sono ${numero}`);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 14 - - - - - - - - -')

var uscita = [];
function onlyTheYears () {
  for (let i = 0; i < movies.length; i++) {
    let anno = movies[i].Year;
    uscita.push(anno);
  }
}
onlyTheYears();
console.log(uscita);


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti
  nell'array "movies" fornito.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 15 - - - - - - - - -')

for (let i=0; i<movies.length; i++) {
  var LastMillennium = movies.filter(onlyInLastMillennium);
  function onlyInLastMillennium (film) {
    return parseInt(film.Year) <= 2000;
  }
}
console.log(LastMillennium);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti
  nell'array "movies" fornito.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 16 - - - - - - - - -')

var sum = 0;
function sumAllTheYears () {
  for (let i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year);
  }
}
sumAllTheYears();
console.log(`la somma di tutti gli anni dei film nell'array è ${sum}`);


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito
  che la contengono nel titolo.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 17 - - - - - - - - -')

var movies17 = [];
function searchByTitle (stringa17) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(stringa17)) {
      movies17.push(movies[i])
    }
  }
}
searchByTitle('Avengers');
console.log(movies17);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due
  array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo,
  mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 18 - - - - - - - - -')

var oggetto18 = {
  match: [],
  unmatch: []
}
function searchAndDivide (stringa18) {
  for (i=0; i<movies.length; i++) {
    if (movies[i].Title.includes(stringa18)) {
      oggetto18.match.push(movies[i])
    } else {
      oggetto18.unmatch.push(movies[i])
    }
  }
}
searchAndDivide('Lord');
console.log(oggetto18);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento
  nella posizione ricevuta come parametro.
*/
console.log('- - - - - - - - - Arrays & Oggetti : ESERCIZIO 19 - - - - - - - - -')

var movies19 = [];
function removeIndex (number) {
  for (i = 0; i < movies.length; i++) {
    if (movies.indexOf(movies[i]) !== number) {
      movies19.push(movies[i])
    }
  }
}
removeIndex(13);
console.log(movies19);


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 20 - - - - - - - - -')
console.log('nota: ho inserito console log per visualizzare elemento selezionato')

function funzione20 () {
  var es20 = document.getElementById('container');
  console.log(es20)
}
funzione20();


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('- - - - - - - - - DOM : SERCIZIO 21 - - - - - - - - -')
console.log('nota: ho inserito console log per visualizzare elemento selezionato')

var es21 = [];
function funzione21 () {
  es21 = document.querySelectorAll('td');
  console.log(es21)
}
funzione21();


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 22 - - - - - - - - -')

var es22;
var text;
function funzione22 () {
  es22 = document.querySelectorAll('td');
  for (let i = 0; i <es22.length; i++) {
    text = es22[i].textContent;
    console.log(text);
  }
}
funzione22();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 23 - - - - - - - - -')
console.log('nota: per soluzione guardare DOM')

function funzione23 () {
  var links = document.querySelectorAll('a');
  for (let i = 0; i <links.length; i++) {
    links[i].style.backgroundColor = 'red';
  }
}
funzione23();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 24 - - - - - - - - -')
console.log('nota: per soluzione guardare DOM')

function funzione24 () {
  var lista = document.getElementById('myList');
  var liNew = document.createElement('li');
  liNew.innerText = 'nuovo elemento aggiunto'
  lista.appendChild(liNew);
}
funzione24();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 25 - - - - - - - - -')
console.log('nota: per soluzione guardare DOM')

function funzione25 () {
  var lista = document.getElementById('myList');
  do {
    lista.removeChild(lista.firstChild)
  } while (lista.hasChildNodes())
}
funzione25();


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('- - - - - - - - - DOM : ESERCIZIO 26 - - - - - - - - -')
console.log('nota: per soluzione guardare DOM')

function funzione26 () {
  var tag = document.querySelectorAll('tr');
  for (let i = 0; i <tag.length; i++) {
    tag[i].className = 'test'
  }
}
funzione26();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('- - - - - - - - - [EXTRA] JS Avanzato : ESERCIZIO 27 - - - - - - - - -')


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('- - - - - - - - - [EXTRA] JS Avanzato : ESERCIZIO 28 - - - - - - - - -')


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log('- - - - - - - - - [EXTRA] JS Avanzato : ESERCIZIO 29 - - - - - - - - -')

