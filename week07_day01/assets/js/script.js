
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

var firstUser = new User ('Mario', 'Rossi', 105, 'Roma');
var secondUser = new User ('Paolo', 'Bianchi', 120, 'Milano');
console.log(firstUser);
console.log(secondUser);
firstUser.benchmark();


// - - - - - - - - - - - - - - - Esercizio 2 - - - - - - - - - - - - - - -









