$(document).ready(function () {
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
            correctAnswer: ' Antarctica Desert covers 5,500,000 square miles and it is the largest desert in the world. Located around the South Pole, it is the driest, windiest, and coldest continent on earth.'
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
                'Kirgizstan',
            ],
            correctAnswer: 'Saudi Arabia'
        },
    ];


    let score = 0;
    let numberOfQuestions = STORE.length;
    let currentQuestion = 0;
    let zuvhariultTotal = 0;
    let answerOptions = STORE[currentQuestion].answers;
    let correctAnswer = STORE[currentQuestion].correctAnswer;

    $('.questionBox').on("click", '.check', function () {
        console.log('ansSumbit');
        console.log('STORE[currentQuestion-1].correctAnswer', STORE[currentQuestion - 1].correctAnswer);
        console.log('$(name=["ans"]).val()', $('input[name=ans]').val());
        if (STORE[currentQuestion - 1].correctAnswer.includes($('input[name=ans]:checked').val())) {
            event.preventDefault();
        }
        // 
    });



    //hidden next button and feedback function view

    $('.questionBox').html('<form id="moveNext">'
        + '<button type="nextOne" class="nextQuestion">Next</button></form>');
    $('.nextQuestion').hide();

    $('.nextQuestion').on('click', function (event) {
        generateQuestions();
    });


    function feedBackforAnswer(input) {
        let feedbackAnswer = STORE[currentQuestion].correctAnswer;
        //if the answer is correct do this
        // if (feedBackforAnswer === ) {
        //     if 
        //  $('.resultBox').html(
        //         '<h3>Correct!</h3>');
        // } else {
        //     $('.resultBox').html(`<h3>Wrong!</h3>
        // ${STORE.correctAnswer}
        //   <button type="button" class="nextButton button">Next</button>`)
        //     $('.questionBox').hide();
        //     $('resultBox').show("${correctAnswer}");
        // }
        generateQuestions();
  
    };



// //to generate current questions and show all the answers
function generateQuestions() {
    //   //if the current question is the last one, do that
    if (currentQuestion < numberOfQuestions) {
        // return eachQuestion(numberOfQuestions);
        console.log(STORE[currentQuestion].question);
        console.log(answerOptions);
        // STORE[currentQuestion].answers.forEach((answer) => {
        //     //   $('.questionBox').append(`<p>${answer}</p><br>`);
        //     // })
    
    function findAnswer (inputAnswers) {
        let userAnswer=  answerOptions("check").val(`${answer}`);

    }
        $('.questionBox').html('<form id="question">'
            + '<p>'
            + STORE[currentQuestion].question
            + '</p>'
            + STORE[currentQuestion].answers.map((answer) => {
                return `<input type="radio" name="ans" value="${answer}"> ${answer}<br>`
            }).join('')
            + '<button type="button" class="check">Submit</button></form>');
        currentQuestion++;
        $('.numberOfQuestions').text(currentQuestion);
    } else {
        currentQuestion = 0;

    }
};


// 1. submit button deer event function esvel id gaar ni function bichine
$('.startButton').on('click', function (event) {
    $('.boxEs').hide();
    $('.startQuiz').hide();
    $('.numberOfQuestions').text(1);
    generateQuestions();
    $('.questionBox').show();

});


function updateQuestionAndScore() {
    let html = $(`<ul>
          <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
          <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
        </ul>`);
    $(".askIt").html(html);
}


// updacore();



// funcions needed to run the app
function handleQuiz() {
    // startQuiz();
    //generateQuestions();
    // submitAnswer();
    // restartQuiz();
}
$(handleQuiz);

});

