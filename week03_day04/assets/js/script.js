
/* FUNCTION FOR BUTTON CLICK HANDLING */
const clickHandling = function() {

    /* check if no task in input field*/
    if(document.querySelector('#newTask input').value.length === 0) {
        alert('Insert a new task!')
    } else {

        /* method to create a new task */
        createTask();
        /* method to complete a task */
        completeTask();
        /* method to delete a task */
        deleteTask();
    }
}

/* METHOD TO CREATE A NEW TASK */
const createTask = function() {

    let input = document.querySelector('#newTask input');
    let tasks = document.querySelector('#tasks');

    /* newTask item definition */
    let newTask =
        `<div class="task">
            <span id="taskname">${input.value}</span><button class="deleteBtn"><i class="far fa-trash-alt"></i></button>
        </div>`
    
    /* newTsk item position into DOM */
    tasks.innerHTML += newTask;

    /* input.value at blank after click */
    input.value = '';
}

/* METHOD TO COMPLETE A TASK */
const completeTask = function() {
    let tasksArray = document.querySelectorAll('.task');
    for(let i=0; i<tasksArray.length; i++) {
        tasksArray[i].addEventListener('click', function() {
            this.classList.toggle('completed');
        })
    }
}

/* METHOD TO DELETE A TASK */
const deleteTask = function() {
    let deleteBtnsArray = document.querySelectorAll('.deleteBtn');
    for(let i=0; i<deleteBtnsArray.length; i++) {
        deleteBtnsArray[i].addEventListener('click', function() {
            this.parentNode.remove();
        })
    }
}

/* ADDEVENTLISTENER ON BUTTON CLICK AT WINDOW.ONLOAD */
window.onload = function() {
    let createTaskBtn = document.querySelector('#createTaskBtn');
    createTaskBtn.addEventListener('click', clickHandling)
}