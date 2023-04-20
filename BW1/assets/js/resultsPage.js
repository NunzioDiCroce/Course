//Dichiarazioni variabili:
//Risposte che derivano dalla Question Page e prese dal localStorage

var match = parseInt(localStorage.getItem('match'));
var unmatch = parseInt(localStorage.getItem('unmatch'));
console.log(match);
console.log(unmatch);
var answer = {

    match: 0,
    unmatch:0 ,
};

answer.match = match;
answer.unmatch = unmatch;
console.log(answer);

//Array classe 'resultsItem' con i tre div
var results = document.getElementsByClassName('resultsItem');
//Variabili per i risultati
var correttePercentuale = ((answer.match) / (answer.match + answer.unmatch) * 100).toFixed(1);
var sbagliatePercentuale = ((answer.unmatch) / (answer.match + answer.unmatch) * 100).toFixed(1);
var totale = answer.match + answer.unmatch;
//Variabili per il div delle risposte esatte
var parCorrectTitle = document.createElement('p');
parCorrectTitle.innerText = 'Correct';
parCorrectTitle.style.fontSize = '3em';
parCorrectTitle.style.margin = '0';

var parCorrectPer = document.createElement('p');
parCorrectPer.innerText = correttePercentuale + '%';
parCorrectPer.style.fontSize = '3em';
parCorrectPer.style.margin = '0';
parCorrectPer.style.fontWeight = 'bold';
parCorrectTitle.style.lineHeight = '1em';
/*parCorrectPer.style.paddingBottom = '50%';*/

var parCorrectQue = document.createElement('p');
parCorrectQue.innerText = answer.match + '/' + totale + ' questions';
parCorrectQue.style.margin = '0';

/*Variabili appoggio*/
var correctEmpty = document.createElement('p');
correctEmpty.innerText = "\n";

var wrongEmpty = document.createElement('p');
wrongEmpty.innerText = "\n";


parCorrectQue.style.paddingBottom = '100px';
results[0].appendChild(parCorrectTitle);
results[0].appendChild(parCorrectPer);
results[0].appendChild(parCorrectQue);
results[0].appendChild(correctEmpty);
results[0].style.textAlign = 'left';

results[0].style.textAlign = 'left';

//Variabili per il div delle risposte sbagliate
var parWrongTitle = document.createElement('p');
parWrongTitle.innerText = 'Wrong';
parWrongTitle.style.fontSize = '3em';
parWrongTitle.style.margin = '0';
parWrongTitle.style.lineHeight = '1em';



var parWrongPer = document.createElement('p');
parWrongPer.innerText = sbagliatePercentuale + '%';
parWrongPer.style.fontSize = '3em';
parWrongPer.style.margin = '0';
parWrongPer.style.fontWeight = 'bold';
/*parWrongPer.style.paddingBottom = '50%';*/

var parWrongQue = document.createElement('p');
parWrongQue.innerText = answer.unmatch + '/' + totale + ' questions';
parWrongQue.style.margin = '0';
parWrongQue.style.paddingBottom = '100px';

results[2].appendChild(parWrongTitle);
results[2].appendChild(parWrongPer);
results[2].appendChild(parWrongQue);
results[2].appendChild(wrongEmpty);
results[2].style.textAlign = 'right';





//CIAMBELLA CHARTJS
//plugin block del centerText
const centerTextDoughnut = {
    id: 'centerTextDoughnut',
    afterDatasetDraw(chart, args, pluginOptions) {
        const { ctx } = chart;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'white bold 12px sans-serif';

        const text = 'Ciao';

        const textWidth = ctx.meausureText(text).width;

        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;
        ctx.fillText(text, x, y);

    }
}
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
            borderAlign: 'inner',
            plugins: {







            }

        },
        plugins: [{
            title: {
                display: true,
                text: 'Congratulations!',
                color: 'white',

                font: {
                    size: 15,
                }

            },
            id: 'text',

            afterDraw: function (chart, a, b) {
                let width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                let fontSize = (height / 280).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";

                let text0 = 'Congratulations!',

                textX0 = Math.round((width - ctx.measureText(text0).width) / 2),
                textY0 = height / 2.9;
                ctx.fillStyle = 'white',
                ctx.fillText(text0, textX0, textY0);

                let text1 = `You passed the exam`,

                textX1 = Math.round((width - ctx.measureText(text1).width) / 2),
                textY1 = height / 2.4;
                ctx.fillStyle = 'aqua',
                ctx.fillText(text1, textX1, textY1);

                ctx.restore();
                let fontSize1 = (height / 400).toFixed(2);
                ctx.font = fontSize1 + "em sans-serif";
                ctx.textBaseline = "middle";
                
                let text2 = `We'll send you the certificate in`,
                textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
                textY2 = height / 1.9;
                ctx.fillStyle = 'white',
                ctx.fillText(text2, textX2, textY2);
                
                let text3 = 'in few minutes.',
                textX3 = Math.round((width - ctx.measureText(text3).width) / 2),
                textY3 = height / 1.7;
                ctx.fillStyle = 'white',
                ctx.fillText(text3, textX3, textY3);
                ctx.save();

                let text4 = 'Check your email (including',
                textX4 = Math.round((width - ctx.measureText(text4).width) / 2),
                textY4 = height / 1.6;
                ctx.fillStyle = 'white',
                ctx.fillText(text4, textX4, textY4);
                ctx.save();

                let text5 = 'promotions/spam folder)',
                textX5 = Math.round((width - ctx.measureText(text5).width) / 2),
                textY5 = height / 1.5;
                ctx.fillStyle = 'white',
                ctx.fillText(text5, textX5, textY5);
                ctx.save();
            },

        }],


        
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
            borderAlign: 'inner',
            plugins: {







            }

        },
        plugins: [{
            title: {
                display: true,
                text: 'Sorry!',
                color: 'white',

                font: {
                    size: 15,
                }

            },
            id: 'text',

            afterDraw: function (chart, a, b) {
                let width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                let fontSize = (height / 280).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";

                let text0 = 'Sorry!',

                    textX0 = Math.round((width - ctx.measureText(text0).width) / 2),
                    textY0 = height / 2.5;
                ctx.fillStyle = 'white',
                    ctx.fillText(text0, textX0, textY0);

                let text1 = `You didn't pass the exam`,

                    textX1 = Math.round((width - ctx.measureText(text1).width) / 2),
                    textY1 = height / 2;
                ctx.fillStyle = 'red',
                    ctx.fillText(text1, textX1, textY1);

                ctx.restore();
                let fontSize1 = (height / 400).toFixed(2);
                ctx.font = fontSize1 + "em sans-serif";
                ctx.textBaseline = "middle";
                let text2 = ``,
                

                    textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
                    textY2 = height / 1.6;
                ctx.fillStyle = 'white',
                    ctx.fillText(text2, textX2, textY2);

                ctx.save();
            },

        }],


        
    });
}





const data = {
    datasets: [{
        label: 'outer',
        data: [1, 2],
        backgroundColor: [
            '#27AE60',
            '#3333331A'
        ],
        rotation: 210,
        circumference: 300,
        cutout: '50%',
        borderWidth: 0
    }, {
        // dummy dataset to fill middle.
        label: 'inner',
        data: [1],
        backgroundColor: '#27AE60',
        weight: 3,
        borderWidth: 0
    }]
};






