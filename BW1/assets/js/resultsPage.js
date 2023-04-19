var matchValue = 0;
var unmatchValue = 0;

 match = parseInt(localStorage.getItem('match'));
 unmatch = parseInt(localStorage.getItem('unmatch'));
 console.log(match);
 console.log(unmatch);
var answer = {

    match: matchValue,
    unmatch:unmatchValue,
};



//Array classe 'resultsItem' con i tre div
var results = document.getElementsByClassName('resultsItem');
//Variabili per i risultati
var correttePercentuale = ((answer.match) / (answer.match + answer.unmatch) * 100).toFixed(1);
var sbagliatePercentuale = ((answer.unmatch) / (answer.match + answer.unmatch) * 100).toFixed(1);
var totale = answer.match + answer.unmatch;
//Variabili per il div delle risposte esatte
var parCorrectTitle = document.createElement('p');
parCorrectTitle.innerText = 'Correct';
parCorrectTitle.style.fontSize = '2em';
parCorrectTitle.style.margin = '0';

var parCorrectPer = document.createElement('p');
parCorrectPer.innerText = correttePercentuale + '%';
parCorrectPer.style.fontSize = '2em';
parCorrectPer.style.margin = '0';
parCorrectPer.style.fontWeight = 'bold';

var parCorrectQue = document.createElement('p');
parCorrectQue.innerText = answer.correct + '/' + totale + ' questions';
parCorrectQue.style.margin = '0';

results[0].appendChild(parCorrectTitle);
results[0].appendChild(parCorrectPer);
results[0].appendChild(parCorrectQue);
results[0].style.textAlign = 'left';

results[0].style.textAlign = 'left';

//Variabili per il div delle risposte sbagliate
var parWrongTitle = document.createElement('p');
parWrongTitle.innerText = 'Wrong';
parWrongTitle.style.fontSize = '2em';
parWrongTitle.style.margin = '0';

var parWrongPer = document.createElement('p');
parWrongPer.innerText = sbagliatePercentuale + '%';
parWrongPer.style.fontSize = '2em';
parWrongPer.style.margin = '0';
parWrongPer.style.fontWeight = 'bold';

var parWrongQue = document.createElement('p');
parWrongQue.innerText = answer.wrong + '/' + totale + ' questions';
parWrongQue.style.margin = '0';

results[2].appendChild(parWrongTitle);
results[2].appendChild(parWrongPer);
results[2].appendChild(parWrongQue);

results[2].style.textAlign = 'right';





//CIAMBELLA CHARTJS
//Chart.defaults.global.defaultFontFamily = 'Loto';
//Chart.defaults.plugins.title = 'Loto';
//Chart.defaults.global.defaultFontSize = 5;

if (sbagliatePercentuale < 60) {

    var myCanvas = document.getElementById('myCanvas').getContext('2d');
    var config = new Chart(myCanvas, {
        type: 'doughnut',
        backgroundShadowColor: 'black',
        shadowBlur: 3,
        shadowOffsetX: 3,
        shadowOffsetY: 10,

        data: {

            datasets: [
                {
                    label: 'Result',
                    data: [sbagliatePercentuale, correttePercentuale],
                    backgroundColor: ['#D20094', '#00FFFF'],
                    cutout: '70%',
                    hoverOffset: 1,
                    borderColor: 'transparent',


                }]

        },
        options: {
            plugins: {

                title: {
                    display: true,
                    text: 'Congratulations!',
                    color: 'white',
                    position: 'top',
                    font: {
                        size: 15,
                    }

                },

                subtitle: {
                    display: true,
                    text: 'You passed the exam!',
                    color: '#00FFFF',
                    font: {
                        size: 15,
                    }


                },



            },


        }
    });
}
else {
    var myCanvas = document.getElementById('myCanvas').getContext('2d');
    var config = new Chart(myCanvas, {
        type: 'doughnut',
        backgroundShadowColor: 'black',
        shadowBlur: 3,
        shadowOffsetX: 3,
        shadowOffsetY: 10,

        data: {

            datasets: [
                {
                    label: 'Result',
                    data: [sbagliatePercentuale, correttePercentuale],
                    backgroundColor: ['#D20094', '#00FFFF'],
                    cutout: '70%',
                    hoverOffset: 1,
                    borderColor: 'transparent',



                }]

        },
        options: {
            plugins: {

                title: {
                    display: true,
                    text: 'Sorry!',
                    color: 'white',
                    position: 'top',
                    font: {
                        size: 15,
                    }

                },

                subtitle: {
                    display: true,
                    text: `You didn't pass the exam!`,
                    color: 'red',
                    font: {
                        size: 15,
                        weight: 'bold',
                    }


                },



            },

        }
    });
}

/*options: {
     cutout: '90%',
     title: {
     display: true,
     position: 'top',
     text: 'The summary of your answer',
     fontSize: 30,
    } ,
    legend: {
     display: true,
     position: 'right'
    },
 centertext:'Ciao',
 },*/



//Paragrafi centro ciambella

var ciambella = document.getElementById('myCanvas');
if (correttePercentuale > 60) {
    ciambella.innerHTML += 'Hai vinto';
} else {
    ciambella.innerHTML += 'Hai perso';
}

/*let mylabels = ['roma', 'milan']
let myData = [1, 6]

let chart = new Chart(myCanvas, {
    type: 'doughnut',
    data: {
        labels: mylabels,
        datasets: [{
          label: "popolazione",
          data: myData,
          backgroundColor : ['#00FFFF', '#D20094'
 
        ],

         borderWidth: '',
         borderColor: 'green',
         hoverBorderWidth: '' ,
         hoverBorderColor: '#00FFFF',
         }]

    },
    options: {
        cutout: '90%',
       title: {
        display: true,
        position: 'top',
        text: 'The summary of your answer',
        fontSize: 30,
       } ,
       legend: {
        display: false,
        position: 'right'
       },
       centertext: ''
    },
});
*/









