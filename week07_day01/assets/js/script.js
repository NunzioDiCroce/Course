
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

class Pet {
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

var firstPet = new Pet ('Pippo', 'Mario', 'Cane', 'Labrador');
var secondPet = new Pet ('Pluto', 'Mario', 'Cane', 'Bassotto');
console.log(firstPet);
console.log(secondPet);
firstPet.sameOwner();


// - - - - - - - - - - - - - - - Esercizio 2: JS FORM - - - - - - - - - - - - - - -


document.addEventListener('click', insertPet);
function insertPet () {

}