/* - - - - data base domande, non modificare - - - - */

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  /* - - - - scrip questionPage - - - - */

  /*window.onload = function () {};*/


var currentQuestion;
var currentCorrect_answer;
var currentIncorrect_answer = [];
function selectQuestion (index) {
    for (i = 0; i < questions.length; i++) {
        currentQuestion = questions[index].question
        currentCorrect_answer = questions[index].correct_answer
        currentIncorrect_answer = questions[index].incorrect_answers

    }
}
selectQuestion(8);

function writeQuestion () {
    var question = document.getElementById('questionPageTitle');
    var h1New = document.createElement('h1');
    h1New.innerText = currentQuestion;
    h1New.className = 'questionPageTitle';
    question.appendChild(h1New);
}
writeQuestion();

function writeAnswers () {
    currentIncorrect_answer.push(currentCorrect_answer);
    var answers = currentIncorrect_answer;
    console.log(answers);
    shuffleArray(answers);
    console.log(answers);
    var answer = document.getElementById('questionPageAnswers');
    for (i = 0; i < answers.length; i++) {
        var button = document.createElement('button');
        button.innerHTML = answers[i];
        button.className = 'answerButton';
        answer.appendChild(button);
    }
}
writeAnswers();

function shuffleArray(inputArray) {
    inputArray.sort(()=>Math.random() - 0.5);
}
