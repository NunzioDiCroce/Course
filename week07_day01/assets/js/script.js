
// - - - - - - - - - - - - - - - Esercizio 1 - - - - - - - - - - - - - - -
class User {
    constructor (_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location
    }
    benchmark () {
        if (firstUser.age > secondUser.age) {
            console.log(`${firstUser.firstName} ${firstUser.lastName} è più vecchio di ${secondUser.firstName} ${secondUser.lastName}`)
        } else if (firstUser.age === secondUser.age) {
            console.log(`${firstUser.firstName} ${firstUser.lastName} e ${secondUser.firstName} ${secondUser.lastName} hanno la stessa età`)
        } else {
            console.log(`${firstUser.firstName} ${firstUser.lastName} è più giovane di ${secondUser.firstName} ${secondUser.lastName}`)
        }
    }
}

var firstUser = new User ('Mario', 'Rossi', 24, 'Roma');
var secondUser = new User ('Paolo', 'Bianchi', 32, 'Milano');
console.log(firstUser);
console.log(secondUser);
firstUser.benchmark();


// - - - - - - - - - - - - - - - Esercizio 2 - - - - - - - - - - - - - - -

// definizione classe
class Pet {
    petName;
    ownerName;
    species;
    breed;
    constructor (_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed
    }
    sameOwner () {
        if (firstPet.ownerName === secondPet.ownerName) {
            console.log(`${firstPet.petName} ha lo stesso padrone di ${secondPet.petName} ovvero ${firstPet.ownerName}`)
        } else {
            console.log(`${firstPet.petName} e ${secondPet.petName} non hanno lo stesso padrone`)
        }
    }
}

// soluzione esercizio 2 con verifica uguaglianza valore proprietà ownerName

var firstPet = new Pet ('Pippo', 'Mario', 'Cane', 'Labrador');
var secondPet = new Pet ('Pluto', 'Mario', 'Cane', 'Bassotto');
console.log(firstPet);
console.log(secondPet);
firstPet.sameOwner();


// soluzione esercizio 2 con istanze di classe tramite form

// definizione variabili per manipolazione DOM
var petName = document.querySelector('#petName');
console.log(petName);
var ownerName = document.querySelector('#ownerName');
console.log(ownerName);
var species = document.querySelector('#species');
console.log(species);
var breed = document.querySelector('#breed');
console.log(breed);
var inserisci = document.querySelector('#inserisci');
console.log(inserisci);
var elenco = document.querySelector('#elenco');
console.log(elenco);

// definizione array
var animali = [];

// definizione funzione per:
// 1. creare oggetto animale
// 2. inserire l'oggetto in array
// 3. scrivere l'oggetto in elenco DOM
inserisci.addEventListener ('click', (event) => {
    event.preventDefault();
    if (petName.value != '' && ownerName.value != '' && species.value != '' && breed.value != '' ) {
        // istanza classe
        let newPet = new Pet (petName.value, ownerName.value, species.value, breed.value);
        // inserimento istanza in array
        animali.push(newPet);
        console.log(animali);
        // scrittura nel DOM
        elenco.innerHTML += `<li>ANIMALE: ${newPet.petName}; PADRONE: ${newPet.ownerName}; SPECIE: ${newPet.species}; RAZZA: ${newPet.breed}</li>`
        petName.value = '';
        ownerName.value = '';
        species.value = '';
        breed.value = '';
    } else {
        elenco.innerHTML = `Compilare tutti i campi !`
    }
})


