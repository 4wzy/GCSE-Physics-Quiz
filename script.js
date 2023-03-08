// This line of code generates a random number between 0.1 and 20, and rounds it to 2 decimal points
mass = twoDecimalPlaces(getRandomArbitrary(0.1, 20));
velocity = twoDecimalPlaces(getRandomArbitrary(0.1, 20));
distance = twoDecimalPlaces(getRandomArbitrary(0.1, 350));
time = twoDecimalPlaces(getRandomArbitrary(0.1, 90));

let questions = [
    {
        question: `What is the kinetic energy of an object with mass ${mass}kg and velocity ${velocity}ms^-1?`,
        answer: twoDecimalPlaces(0.5 * mass * velocity * velocity)
    },
    {
        question: `What is the speed of an object which travels ${distance}m in ${time} seconds?`,
        answer: twoDecimalPlaces(distance / time)
    },
    {
        question: "Third question",
        answer: 3
    }
];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function twoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}

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
    if (currentQuestion == (questions.length - 1)) {
        submitButton.innerHTML = 'View results!'
        submitButton.style.background = "linear-gradient(to right, rgb(226, 86, 21), rgb(40, 30, 220))";
    }
    else {
        submitButton.innerHTML = 'Next Question'
    }
    submitButton.onclick = nextQuestion;
}

function nextQuestion() {
    const resultDisplay = document.querySelector('#results');

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const quizContainer = document.querySelector('#quiz-container');
        resultDisplay.innerHTML = `<h3>Quiz complete!</h3> <p>You scored ${score} out of ${questions.length}.</p>`;
    }
}

let currentQuestion = 0;
let score = 0;
displayQuestion();