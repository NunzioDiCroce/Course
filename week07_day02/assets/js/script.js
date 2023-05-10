
// - - - - - - - - - - - - - - - - - - - - Esercizio TIMER - - - - - - - - - - - - - - - - - - - -
//definizione variabili DOM
let timing = document.getElementById('timer');

//metodo setInterval
let interval = setInterval(timeFunction, 1000);

//definizione funzione
function timeFunction() {
    let seconds = 0;
    if(sessionStorage.getItem('timer')) {
        seconds = Number(sessionStorage.getItem('timer'))
    } else {
        seconds = Number(timing.innerHTML)
    }
    seconds++;
    sessionStorage.setItem('timer', seconds);
    timing.innerHTML = seconds;
}



// - - - - - - - - - - - - - - - - - - - - Esercizio FORM UTENTI - - - - - - - - - - - - - - - - - - - -
//definizione variabili DOM
//definizione variabili DOM - form utente
let userName = document.getElementById('nameBox');
let userSurname = document.getElementById('surnameBox');
let userCity = document.getElementById('cityBox');
//definizione variabili DOM - aggiungi/rimuovi utente
let addUser = document.getElementById('addBtn');
let removeUser = document.getElementById('removeBtn');
//definizione variabili DOM - lista utenti
let list = document.getElementById('usersList');

//definizione array users
const users = [];

//definizione funzioni
//definizione funzione aggiungi utente
addUser.addEventListener('click', function(event){
    event.preventDefault();
    let user = {
        name: userName.value,
        surname: userSurname.value,
        city: userCity.value
    }
    console.log(user);
    users.push(user);
    console.log(users);
    userName.value = '';
    userSurname.value = '';
    userCity.value = '';
    list.appendChild(document.createElement('li')).innerText =`${user.name} ${user.surname} | ${user.city}`;
    localStorage.setItem('users', JSON.stringify(users))
});

//definizione funzione rimuovi utente
removeUser.addEventListener('click', function() {
    users.pop();
    console.log(users);
    list.lastChild.remove();
    localStorage.setItem('users', JSON.stringify(users))
});