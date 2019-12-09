let STORE = [
    {
        question: 'How many continents are there in the world?',
        answers: [
            'There are 8 continents',
            'There are 6 continents',
            'There are 7 continents',
            'There are 5 continents including Euroasia, Africa, Australia, America, Antarctica '
        ],
        correctAnswer: 'There are 7 continents - Asia, Oceana, Africa, Europe, Antarctica, North America, South America'
    },
    {
        question: 'How many countries are there in the world?',
        answers: [
            '195',
            '193',
            '241',
            '200'
        ],
        correctAnswer: 'There are 195 countries in the world according to UN'
    },
    {
        question: 'What is the smallest country in the world?',
        answers: [
            'San Marino',
            'Monaco',
            'Liechtenstein',
            'Vatican City'
        ],
        correctAnswer: 'Vatican City is the smallest country in the world, with an area of 526,235.6 square yards.'
    },
    {
        question: 'Which Country Has The Most Fresh Water?',
        answers: [
            'United States',
            'Canada',
            'Brazil',
            'Russia'
        ],
        correctAnswer: ' Lake Baikal, the largest and deepest freshwater lake in the world, is located in Russia. Baikal holds up to approximately 1/5 of fresh water in the world.'
    },
    {
        question: 'Which country took the top spot as the happiest country in the world in 2019?',
        answers: [
            'Finland',
            'Norway',
            'Japan',
            'Australia'
        ],
        correctAnswer: 'Finland'
    },
    {
        question: 'What causes carbon emissions?',
        answers: [
            'Defrostation',
            'Burning fossil fuel and coal',
            'Oil and gas',
            'All of the above'
        ],
        correctAnswer: 'All of the above'
    },
    {
        question: 'Where does most of the world\'s oxygen come from?',
        answers: [
            'Forest',
            'Ocean',
            'Plankton',
            'Fossil fuel'
        ],
        correctAnswer: 'Plankton that are plants, known as phytoplankton, grow and get their own energy through photosynthesis and are responsible for producing an estimated 80% of the world\'s oxygen.'
    },
    {
        question: 'What is the largest desert in the world?',
        answers: [
            'Gobi Desert',
            'Patagonian Desert',
            'Antarctica Desert',
            'Sahara Desert'
        ],
        correctAnswer: ' Antarctic Desert covers 5,500,000 square miles and it is the largest desert in the world. Located around the South Pole, it is the driest, windiest, and coldest continent on earth.'
    },
    {
        question: 'What are the matriarchial societies?',
        answers: [
            'Bribri-Costa Rica, Khasi-India',
            'Mosuo-China, Minangkabau-Indonesia',
            'Umoja-Kenya, Akan-Ghana',
            'All of the above'
        ],
        correctAnswer: 'All of the above'
    },
    {
        question: 'Which country has no river in the world?',
        answers: [
            'United Arabia Emirate',
            'Saudi Arabia',
            'Bhutan',
            'Kirgizstan'
        ],
        correctAnswer: 'Saudi Arabia'
    },
];

let score = 0;
let numberOfQuestions = STORE.length;
let currentQuestion = 0;

//to generate current questions and show all the answers
function generateQuestions() {
    //if the current question is the last one, do that
    if (currentQuestion < numberOfQuestions) {
        // return eachQuestion(numberOfQuestions);
        console.log(STORE[currentQuestion].question);
        $('.innerBox').text(STORE[currentQuestion].question);
        $('.numberOfQuestions').text(10);
    } else {
        console.log('this is the last question');

    }
};

function updateQuestionAndScore() {
    const html = $(`<ul>
        <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
    $(".askIt").html(html);
  }

// funcions needed to run the app
function handleQuiz() {
    // startQuiz();
    generateQuestions();
    // submitAnswer();
    // restartQuiz();
}
$(handleQuiz);
