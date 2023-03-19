// Function to generate random number between minimum and maximum values.
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

// This line of code generates a random number in a certain range and rounds it
mass = Math.round(getRandomArbitrary(0, 20));
velocity = Math.round(getRandomArbitrary(0, 20));
distance = Math.round(getRandomArbitrary(0, 350));
time = Math.round(getRandomArbitrary(0, 90));

let questions = [
    {
        question: `What is the kinetic energy of an object with mass ${mass}kg and velocity ${velocity}ms^-1?`,
        answer: oneDecimalPlaces(0.5 * mass * velocity * velocity),
        img: "eq1.png"
    },
    {
        question: `What is the speed of an object which travels ${distance}m in ${time} seconds?`,
        answer: oneDecimalPlaces(distance / time)
    },
    {
        question: "Third question",
        answer: 3
    }
];

// Function to round a number to one decimal place.
function oneDecimalPlaces(number) {
    return Math.round(number * 10) / 10;
}

// Function to display a question on screen along with its associated image.
function displayQuestion() {
    const submitButton = document.querySelector('.btn');
    submitButton.innerHTML = 'Submit'
    submitButton.onclick = submitAnswer;

    const quizText = document.querySelector('#quiz-text');
    const resultDisplay = document.querySelector('#results');

    resultDisplay.innerHTML = '';
    const question = questions[currentQuestion].question;
    quizText.innerHTML = question;

    // Setting image corresponding to current question
    questionImage = document.querySelector('.question-image')
    questionImage.src = questions[currentQuestion].img;

}

// Function to check if user's input matches the correct answer, display feedback and increment score.
function checkAnswer(userAnswerInput) {

    const resultDisplay = document.querySelector('#results');
    if (userAnswerInput == questions[currentQuestion].answer) {
        resultDisplay.innerHTML = '<p>Correct!</p>';
        score++;
    } else {
        resultDisplay.innerHTML = `<p>Incorrect. The answer was ${questions[currentQuestion].answer}</p>`
    }

}

// Function called when the user submits their answer.
function submitAnswer() {
    const userAnswerInput = parseFloat(document.getElementById('user-answer').value);

    checkAnswer(userAnswerInput);

    const submitButton = document.querySelector('.btn');
    if (currentQuestion == (questions.length - 1)) {
        submitButton.innerHTML = 'View results!'
        submitButton.style.background = "linear-gradient(to right, rgb(226, 86, 21), rgb(40, 30, 220))";
    }
    else {
        submitButton.innerHTML = 'Next Question'
    }
    submitButton.onclick = nextQuestion;
}

// Function to set up the next question.
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

// Initialising the current question counter and score before displaying the first question.
let currentQuestion = 0;
let score = 0;
displayQuestion();