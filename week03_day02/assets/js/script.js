/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log('- - - - ESERCIZIO 1 - - - -');
var str1;
var str2;
function funzione1 (str1, str2) {
  var str1New = str1.substring(0,2);
  var str2New = str2.substring(str2.length-3);
  var str3 = str1New + str2New;
  console.log(str3.toUpperCase())
}
funzione1 ('mario', 'giuseppe');

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log('- - - - ESERCIZIO 2 Soluzione A - - - -');
var el01 = Math.floor(Math.random()*101);
var el02 = Math.floor(Math.random()*101);
var el03 = Math.floor(Math.random()*101);
var el04 = Math.floor(Math.random()*101);
var el05 = Math.floor(Math.random()*101);
var el06 = Math.floor(Math.random()*101);
var el07 = Math.floor(Math.random()*101);
var el08 = Math.floor(Math.random()*101);
var el09 = Math.floor(Math.random()*101);
var el10 = Math.floor(Math.random()*101);
funzione2 (el01, el02, el03, el04, el05, el06, el07, el08, el09, el10);
function funzione2 (el01, el02, el03, el04, el05, el06, el07, el08, el09, el10) {
  var arrayEs2 = [el01, el02, el03, el04, el05, el06, el07, el08, el09, el10];
  console.log(arrayEs2);
}

console.log('- - - - ESERCIZIO 2 Soluzione B - - - -');
var arrayEs2b = [];
function funzione2b () {
  for (let i=0; i<10; i++) {
    var casuale = Math.floor(Math.random()*101);
    arrayEs2b.push(casuale);
  } 
  return arrayEs2b;
}
funzione2b();
console.log(arrayEs2b);


/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log('- - - - ESERCIZIO 3 - - - -');
var arrayEs3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayEs3Pari = arrayEs3.filter(funzione3);
function funzione3 (valore) {
  for (let i=0; i<arrayEs3.length; i++) {
    return valore%2===0;
  }
}
console.log(arrayEs3Pari);


/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log('- - - - ESERCIZIO 4 - - - -');
var arrayEs4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
function funzione4 () {
  for (i=0; i<arrayEs4.length; i++) {
    sum += arrayEs4[i];
  }  
}
funzione4();
console.log(arrayEs4);
console.log(sum);


/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log('- - - - ESERCIZIO 5 - - - -');
var arrayEs5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
risultato = arrayEs5.reduce(funzione5);
function funzione5 (totale, numero) {
  return totale + numero;
}
console.log(arrayEs5);
console.log(risultato);


/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log('- - - - ESERCIZIO 6 - - - -');
var arrayEs6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var addendo = 3;
var arrayEs6New = arrayEs6.map(funzione6);
function funzione6 (valore) {
  return valore + addendo;
}
console.log(arrayEs6);
console.log(addendo);
console.log(arrayEs6New);


console.log('- - - - ESERCIZIO 7 non presente nel file della piattaforma - - - -');


/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('- - - - ESERCIZIO 8 - - - -');
var arrayEs8 = ['full', 'stack', 'web', 'developer', 'course'];
var arrayEs8New = [];
function funzione8 () {
  for (let i=0; i<arrayEs8.length; i++) {
    let length = arrayEs8[i].length;
    arrayEs8New.push(length);
  }
}
funzione8();
console.log(arrayEs8);
console.log(arrayEs8New);


/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log('- - - - ESERCIZIO 9 - - - -');
var arrayEs9 = [];
function cento () {
  let valore = 0;
  for (let i=0; i<100; i++) {
    valore += 1;
    arrayEs9.push(valore);
  }
}
cento();
var arrayEs9Pari = arrayEs9.filter(funzione9);
function funzione9 (valore) {
  for (let i=0; i<arrayEs3.length; i++) {
    return valore%2!==0;
  }
}
console.log(arrayEs9Pari);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log('- - - - ESERCIZIO 10 - - - -');
function funzione10 () {
var anni = [];
for (let i = 0; i < movies.length; i++) {
  anni.push(parseInt(movies[i].Year));
}
/*console.log(anni);*/
var annoMin = Math.min (...anni);
/*console.log(annoMin);*/
var piuVecchio = [];
for (i=0; i<movies.length; i++) {
  var moviesObject = movies[i];
  if (moviesObject.Year == annoMin.toString()) {
    piuVecchio.push(moviesObject.Title, moviesObject.Year);
  }
}
console.log(piuVecchio);
}
funzione10();


/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('- - - - ESERCIZIO 11 Soluzione A - - - -');
var number;
function funzione11 () {
  number = movies.length;
}
funzione11();
console.log(number);


console.log('- - - - ESERCIZIO 11 Soluzione B - - - -');
numeroFilm = () => {numero = movies.length}
numeroFilm();
console.log(numero);


/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log('- - - - ESERCIZIO 12 - - - -');
var titles = [];
function funzione12 () {
  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].Title;
    titles.push(title);
  }
}
funzione12();
console.log(titles);


/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log('- - - - ESERCIZIO 13 - - - -');
for (let i=0; i<movies.length; i++) {
  var millennio = movies.filter(funzione13);
  function funzione13 (film) {
    return parseInt(film.Year) >= 2000;
}
}
console.log(millennio);


/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('- - - - ESERCIZIO 14 - - - -');
const parametro = 'tt4154796';
var film;
function funzione14 () {
  for (let i = 0; i < movies.length; i++) {
    if (parametro === movies[i].imdbID) {
      return film = movies[i].Title;
    }
  }
}
funzione14();
console.log(parametro);
console.log(film);


/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log('- - - - ESERCIZIO 15 - - - -');

var sommaAnni = 0;
function funzione15 () {
  for (let i = 0; i < movies.length; i++) {
    sommaAnni += parseInt(movies[i].Year);
  }
}
funzione15();
console.log(sommaAnni);