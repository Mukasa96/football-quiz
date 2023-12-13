const questions = [
    {
        question: "Who won the first world cup",
        answers: [
            { text: "England", correct: false },
            { text: "Brazil", correct: false },
            { text: "Uruguay", correct: true },
            { text: "France", correct: false },
        ]
    },
    {
        question: "Who has the most champions league goals",
        answers: [
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Karim Benzema", correct: false },
            { text: "Robert Lewandowski", correct: false },
            { text: "Lionel Messi", correct: false },
        ]
    },
    {
        question: "When did England last win the world cup",
        answers: [
            { text: "1958", correct: false },
            { text: "1966", correct: true },
            { text: "2002", correct: false },
            { text: "1990", correct: false },
        ]
    },
    {
        question: "What overseas player has the most premier league goals",
        answers: [
            { text: "Robin Van Persie", correct: false },
            { text: "Thierry Henry", correct: false },
            { text: "Mo Salah", correct: false },
            { text: "Sergio Agüero", correct: true },
        ]
    },
    {
        question: "How many league titles does Manchester Utd have",
        answers: [
            { text: "27", correct: false },
            { text: "19", correct: false },
            { text: "20", correct: true },
            { text: "32", correct: false },
        ]
    },
    {
        question: "Who has won the most champions league titles",
        answers: [
            { text: "Ac Milan", correct: false },
            { text: "Real Madrid", correct: true },
            { text: "Barcalona", correct: false },
            { text: "Bayen Munich", correct: false },
        ]
    },
    {
        question: "What player won the world cup 3 times",
        answers: [
            { text: "Johan Cruyff", correct: false },
            { text: "Pele", correct: true },
            { text: "Zidane", correct: false },
            { text: "Diego Maradona", correct: false },
        ]
    },
    {
        question: "Who was the last englishman to win the ballon O'Dor",
        answers: [
            { text: "Micheal Owen", correct: true },
            { text: "Paul Gascoigne", correct: false },
            { text: "Bobby Charlton", correct: false },
            { text: "Wayne Rooney", correct: false },
        ]
    },
    {
        question: "Which of these players have never won the champions league",
        answers: [
            { text: "Daniel Sturridge", correct: false },
            { text: "Jamie Carragher", correct: false },
            { text: "Clarence Seedorf", correct: false },
            { text: "Ronaldo R9", correct: true },
        ]
    },
    {
        question: "How many African players have won the ballon O'Dor",
        answers: [
            { text: "1", correct: true },
            { text: "5", correct: false },
            { text: "3", correct: false },
            { text: "0", correct: false },
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==== "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
    } else {
        selectBtn.classList.add("incorrect");
    }
}


startQuiz();