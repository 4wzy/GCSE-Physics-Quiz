const questions = [
    {
        question: "What is the kinetic energy of an object with mass 3kg and velocity 1.2ms^-1?",
        answer: 2.16
    },
    {
        question: "Test 2",
        answer: 2
    },
    {
        question: "Third question",
        answer: 3
    }
]


function displayQuestion() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.innerHTML = 'Submit'
    submitButton.onclick = submitAnswer;

    const quizQuestionNumber = document.querySelector('#quiz-question-number')
    const quizText = document.querySelector('#quiz-text')
    const resultDisplay = document.querySelector('#results')

    resultDisplay.innerHTML = '';
    const question = questions[currentQuestion].question;
    quizQuestionNumber.innerHTML = `Question ${currentQuestion + 1}`
    quizText.innerHTML = question;

}

function checkAnswer(userAnswerInput) {

    const resultDisplay = document.querySelector('#results');
    if (userAnswerInput == questions[currentQuestion].answer) {
        resultDisplay.innerHTML = '<p>Correct!</p>';
        score++;
    } else {
        resultDisplay.innerHTML = `<p>Incorrect. The answer was ${questions[currentQuestion].answer}</p>`
    }

}

function submitAnswer() {
    const userAnswerInput = parseFloat(document.getElementById('user-answer').value);

    checkAnswer(userAnswerInput);

    const submitButton = document.querySelector('.submit-button');
    submitButton.innerHTML = 'Next Question'
    submitButton.onclick = nextQuestion;
}

function nextQuestion() {
    const resultDisplay = document.querySelector('#results');

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const quizContainer = document.querySelector('#quiz-container');
        resultDisplay.innerHTML += `<p> Quiz complete! You scored ${score} out of ${questions.length}.</p>`;
    }
}

let currentQuestion = 0;
let score = 0;
displayQuestion();