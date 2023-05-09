
//definizione variabili DOM
//definizione variabili DOM: buttons
let addUser = document.getElementById('addBtn');
let removeUser = document.getElementById('removeBtn');

//definizione variabili DOM: form fields
let userName = document.getElementById('nameBox');
let userSurname = document.getElementById('surnameBox');
let userCity = document.getElementById('cityBox');

//definizione array users
let users = [];

//funzione "Aggiungi utente"
addUser.addEventListener('click', function(event) {
    event.preventDefault();
    let newUser = {
        name: userName.value,
        surname: userSurname.value,
        city: userCity.value
    }
    console.log(newUser);
    users.push(newUser);
    localStorage.setItem('newUser', JSON.stringify(users));
});

//funzione "Rimuovi utente"
removeUser.addEventListener('click', function(event) {

});