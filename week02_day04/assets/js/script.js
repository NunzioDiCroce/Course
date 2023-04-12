const starWarsCharacters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '277',
		hair_color: 'blond',
		skin_color: 'fair',
		eye_color: 'blue',
		birth_year: '19BBY',
		gender: 'male',
	},
	{
		name: 'C-3PO',
		height: '167',
		mass: '75',
		hair_color: 'n/a',
		skin_color: 'gold',
		eye_color: 'yellow',
		birth_year: '112BBY',
		gender: 'n/a',
	},
	{
		name: 'R2-D2',
		height: '96',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, blue',
		eye_color: 'red',
		birth_year: '33BBY',
		gender: 'n/a',
	},
	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		hair_color: 'none',
		skin_color: 'white',
		eye_color: 'yellow',
		birth_year: '41.9BBY',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '19BBY',
		gender: 'female',
	},
	{
		name: 'Owen Lars',
		height: '178',
		mass: '120',
		hair_color: 'brown, grey',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '52BBY',
		gender: 'male',
	},
	{
		name: 'Beru Whitesun lars',
		height: '165',
		mass: '75',
		hair_color: 'brown',
		skin_color: 'light',
		eye_color: 'blue',
		birth_year: '47BBY',
		gender: 'female',
	},
	{
		name: 'R5-D4',
		height: '97',
		mass: '32',
		hair_color: 'n/a',
		skin_color: 'white, red',
		eye_color: 'red',
		birth_year: 'unknown',
		gender: 'n/a',
	},
	{
		name: 'Biggs Darklighter',
		height: '183',
		mass: '84',
		hair_color: 'black',
		skin_color: 'light',
		eye_color: 'brown',
		birth_year: '24BBY',
		gender: 'male',
	},
	{
		name: 'Obi-Wan Kenobi',
		height: '182',
		mass: '77',
		hair_color: 'auburn, white',
		skin_color: 'fair',
		eye_color: 'blue_gray',
		birth_year: '57BBY',
		gender: 'male',
	},
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto.
*/
const characters = [];
console.log(characters);
document.getElementById('charactersLenght').innerHTML = characters.length;


/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (i=0; i<starWarsCharacters.length; i++) {
    characters.push(starWarsCharacters[i].name);
}
console.log(characters);
document.getElementById('solutionDue').innerHTML = characters;
document.getElementById('charactersLenght2').innerHTML = characters.length;


/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
  Successivamente usando un for loop, cicla l'array "starWarsCharacters" e inserisci nell'array femaleCharacters gli oggetti con gender = 'female' limitatamente alle proprietà dell'oggetto già inserito.
*/
const femaleCharacters = [];
let female = {
    name: 'Leia Organa',
    hair_color: 'brown',
    eye_color: 'brown'
}
femaleCharacters.push(female);
console.log(femaleCharacters);

for (i=0; i<starWarsCharacters.length; i++) {
    const starWarsCharactersObject = starWarsCharacters[i];
    if (starWarsCharactersObject.gender=='female' && starWarsCharactersObject.name !=='Leia Organa') {
        femaleCharactersObject = {
            name: starWarsCharactersObject.name,
            hair_color: starWarsCharactersObject.hair_color,
            eye_color: starWarsCharactersObject.eye_color
        }
        femaleCharacters.push(femaleCharactersObject);
    }
}
document.getElementById('femaleCharacters').innerHTML = femaleCharacters.length;

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray. Ognuna di queste proprietà contiene un array vuoto.
*/
const eyeColor = {
    blue: new Array,
    yellow: new Array,
    brown: new Array,
    red: new Array,
    blue_gray: new Array
}
console.log(eyeColor);


/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato. Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio.
*/
for (i=0; i<starWarsCharacters.length; i++) {
    const starWarsCharactersObject5 = starWarsCharacters[i];
    switch (starWarsCharactersObject5.eye_color) {
        case 'blue' :
            eyeColor.blue.push(starWarsCharactersObject5);
            break;
    }
    switch (starWarsCharactersObject5.eye_color) {
        case 'yellow' :
            eyeColor.yellow.push(starWarsCharactersObject5);
            break;
    }
    switch (starWarsCharactersObject5.eye_color) {
        case 'brown' :
            eyeColor.brown.push(starWarsCharactersObject5);
            break;
    }
    switch (starWarsCharactersObject5.eye_color) {
        case 'red' :
            eyeColor.red.push(starWarsCharactersObject5);
            break;
    }
    switch (starWarsCharactersObject5.eye_color) {
        case 'blue_gray' :
            eyeColor.blue_gray.push(starWarsCharactersObject5);
            break;
    }
}
document.getElementById('blueLenght').innerHTML = eyeColor.blue.length;
document.getElementById('yellowLenght').innerHTML = eyeColor.yellow.length;
document.getElementById('brownLenght').innerHTML = eyeColor.brown.length;
document.getElementById('redLenght').innerHTML = eyeColor.red.length;
document.getElementById('blue_grayLenght').innerHTML = eyeColor.blue_gray.length;


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
let n=0;
let massNumber=0;
while (n<starWarsCharacters.length) {
    const starWarsCharactersObject6=starWarsCharacters[n];
    massNumber = massNumber + parseInt(starWarsCharactersObject6.mass);
    n++;
}
console.log(massNumber);
document.getElementById('totalMass').innerHTML = massNumber;


/* ESERCIZIO 7
Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)
Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"
Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
switch (true) {
    case massNumber<1000 && massNumber<900 && massNumber<700 && massNumber<500 :
        console.log('Ship is under loaded');
        document.getElementById('message').innerHTML = '\"Ship is under loaded\"';
        break;
    case massNumber<1000 && massNumber<900 && massNumber<700 || massNumber===500 :
        console.log('Ship is half loaded');
        document.getElementById('message').innerHTML = '\"Ship is half loaded\"';
        break;
    case massNumber<1000 && massNumber<900 && massNumber>700 :
        console.log('Warning: Load is over 700');
        document.getElementById('message').innerHTML = '\"Warning: Load is over 700\"';
        break;
    case massNumber<1000 && massNumber>900 :
        console.log('Critical Load: Over 900');
        document.getElementById('message').innerHTML = '\"Critical Load: Over 900\"';
        break;
    case massNumber>1000 :
        console.log('DANGER! OVERLOAD ALERT: Jump ship now!');
        document.getElementById('message').innerHTML = '\"DANGER! OVERLOAD ALERT: Jump ship now!\"';
        break;
}
document.getElementById('totalMass7').innerHTML = massNumber;


/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
const starWarsCharactersNew = starWarsCharacters;
console.log(starWarsCharactersNew);
for (i=0; i<starWarsCharactersNew.length; i++) {
    let starWarsCharactersNewObject = starWarsCharactersNew[i];
    if (starWarsCharactersNewObject.gender === 'n/a') {
        starWarsCharactersNewObject.gender = 'robot';
    }
}


/* EXTRA ESERCIZIO 9
Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato
(tip: cerca un metodo degli array per rimuovere un elemento)
Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
const charactersNew = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi'];

console.log(charactersNew);
document.getElementById('charactersLength').innerHTML = charactersNew.length;
console.log(femaleCharacters);
document.getElementById('femaleCharactersLength').innerHTML = femaleCharacters.length;

for (i=0; i<charactersNew.length; i++) {
	let charactersNewObject = charactersNew[i];
	for (j=0; j<femaleCharacters.length; j++) {
		let femaleCharactersObject = femaleCharacters[j];
		if (femaleCharactersObject.name===charactersNewObject) {
			charactersNew.splice(i,1);
		}
	}
}
console.log(charactersNew);
document.getElementById('charactersLengthNew').innerHTML = charactersNew.length;


/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
document.getElementById('starWarsCharactersLunghezza').innerHTML = starWarsCharacters.length;
document.getElementById('posizione').innerHTML = Math.floor(Math.random()*11);
var starWarsCharactersObj = starWarsCharacters[Math.floor(Math.random()*11)];
console.log(Object.keys(starWarsCharactersObj));
console.log(Object.values(starWarsCharactersObj));
document.getElementById('prop1').innerHTML = starWarsCharactersObj.name;
document.getElementById('prop2').innerHTML = starWarsCharactersObj.height;
document.getElementById('prop3').innerHTML = starWarsCharactersObj.mass;
document.getElementById('prop4').innerHTML = starWarsCharactersObj.hair_color;
document.getElementById('prop5').innerHTML = starWarsCharactersObj.skin_color;
document.getElementById('prop6').innerHTML = starWarsCharactersObj.eye_color;
document.getElementById('prop7').innerHTML = starWarsCharactersObj.birth_year;
document.getElementById('prop8').innerHTML = starWarsCharactersObj.gender;