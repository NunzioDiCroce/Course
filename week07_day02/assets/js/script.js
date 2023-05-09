
// - - - - - - - - - - TIMER - - - - - - - - - - 
let timer = document.getElementById('timer')
setInterval(()=> {
    let seconds = 0
    if(sessionStorage.getItem("timer")) {
        seconds = Number(sessionStorage.getItem("timer"))
    } else {
        seconds = Number(timer.innerHTML)
    }
    seconds++
    sessionStorage.setItem("timer", seconds)
    timer.innerHTML = seconds
}, 1000)


// - - - - - - - - - - FORM REGISTRAZIONE UTENTI - - - - - - - - - - 
//definizione variabili DOM
//definizione variabili DOM: buttons
let addUser = document.getElementById('addBtn');
let removeUser = document.getElementById('removeBtn');

//definizione variabili DOM: form fields
let userName = document.getElementById('nameBox');
let userSurname = document.getElementById('surnameBox');
let userCity = document.getElementById('cityBox');

//definizione variabili DOM: lista utenti
let list = document.getElementById('usersList');

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
    let stringifiedUsers = JSON.stringify(users);
    localStorage.setItem('users', stringifiedUsers);
    let listItem = document.createElement('li');
    list.appendChild(listItem);    
    listItem.innerHTML = `${newUser.name} ${newUser.surname} | ${newUser.city}`;
    userName.value = '';
    userSurname.value = '';
    userCity.value = '';
});

//funzione "Rimuovi utente"
removeUser.addEventListener('click', function() {
    let lastUser = users.pop();
    console.log(lastUser);
    console.log(users);
    localStorage.setItem('newUser', JSON.stringify(users));
});