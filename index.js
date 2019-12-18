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
            correctAnswer: 'There are 7 continents',
            facts: 'There are 7 continents - Asia, Oceana, Africa, Europe, Antarctica, North America, South America.'
        },
        {
            question: 'How many countries are there in the world?',
            answers: [
                '195',
                '193',
                '241',
                '200'
            ],
            correctAnswer: '195',
            facts: 'There are 195 countries in the world according to UN'
        },
        {
            question: 'What is the smallest country in the world?',
            answers: [
                'San Marino',
                'Monaco',
                'Liechtenstein',
                'Vatican City'
            ],
            correctAnswer: 'Vatican City',
            facts: 'Vatican City is the smallest country in the world, with an area of 526,235.6 square yards.'
        },
        {
            question: 'Which Country Has The Most Fresh Water?',
            answers: [
                'United States',
                'Canada',
                'Brazil',
                'Russia'
            ],
            correctAnswer: 'Russia',
            facts: ' Lake Baikal, the largest and deepest freshwater lake in the world, is located in Russia. Baikal holds up to approximately 1/5 of fresh water in the world.'
        },
        {
            question: 'Which country took the top spot as the happiest country in the world in 2019?',
            answers: [
                'Finland',
                'Norway',
                'Japan',
                'Australia'
            ],
            correctAnswer: 'Finland',
            facts: 'Finland\'s social safety net combined with personal freedom and a good work-life balance that gives it the edge.'
        },
        {
            question: 'What causes carbon emissions?',
            answers: [
                'Defrostation',
                'Burning fossil fuel and coal',
                'Oil and gas',
                'All of the above'
            ],
            correctAnswer: 'All of the above',
            facts: 'There are both natural and human sources of carbon dioxide emissions. Natural sources include decomposition, ocean release and respiration.'
        },
        {
            question: 'Where does most of the world\'s oxygen come from?',
            answers: [
                'Forest',
                'Ocean',
                'Plankton',
                'Fossil fuel'
            ],
            correctAnswer: 'Plankton',
            facts: 'Plankton that are plants, known as phytoplankton, grow and get their own energy through photosynthesis and are responsible for producing an estimated 80% of the world\'s oxygen.'
        },
        {
            question: 'What is the largest desert in the world?',
            answers: [
                'Gobi Desert',
                'Patagonian Desert',
                'Antarctica Desert',
                'Sahara Desert'
            ],
            correctAnswer: 'Antarctica Desert',
            facts: 'Antarctica Desert covers 5,500,000 square miles and it is the largest desert in the world. Located around the South Pole, it is the driest, windiest, and coldest continent on earth.'
        },
        {
            question: 'What are the matriarchial societies of current time?',
            answers: [
                'Bribri-Costa Rica, Khasi-India',
                'Mosuo-China, Minangkabau-Indonesia',
                'Umoja-Kenya, Akan-Ghana',
                'All of the above'
            ],
            correctAnswer: 'All of the above',
            facts: 'All 6 Matriarchal Societies in the answer, have Been Thriving With Women at the Helm for Centuries'
        },
        {
            question: 'Which country has no river in the world?',
            answers: [
                'United Arabia Emirate',
                'Saudi Arabia',
                'Bhutan',
                'Kirgizstan',
            ],
            correctAnswer: 'Saudi Arabia',
            facts: 'Saudi Arabia is the world\'s largest country without a river. A river is a permanent body of running water.'
        },
    ];


    let score = 0;
    let numberOfQuestions = STORE.length;
    let currentQuestion = 0;
    let correctAnswerTotal = 0;
    let answerOptions = STORE[currentQuestion].answers;
    let correctAnswer = STORE[currentQuestion].correctAnswer;
    let tellFacts = STORE[currentQuestion].facts;

    //Generate questions in questionBox
    function generateQuestions() {
        if (currentQuestion < numberOfQuestions) {
            $('.questionBox').html('<form id="question">'
            + '<p>'
            + STORE[currentQuestion].question
            + '</p>'
            + STORE[currentQuestion].answers.map((answer) => {
                return `<input type="radio" name="ans" value="${answer}"> ${answer}<br>`
            }).join('')
            + '<button type="button" class="check">Submit</button></form>');
        //currentQuestion++;
        $('.numberOfQuestions').text(currentQuestion);

        console.log(STORE[currentQuestion].question);
            console.log(answerOptions);
        } else {
            currentQuestion = 0;
            $('.questionBox').hide();
            // finalScore();
            $('.questionBox').text(10);
        }
    };


    // function to listen click for startButton and hide welcome page and show questionbox

    $('.startButton').on('click', function (event) {
        $('.startQuiz').hide();
        $('.numberOfQuestions').text(1);
        $('.questionBox').show();
        generateQuestions();
    }
    )


    // question and answers to show in questionbox 
    //radio button
    // $('.questionBox').html('<form id="question">'
    //     + '<p>'
    //     + STORE[currentQuestion].question
    //     + '</p>'
    //     + STORE[currentQuestion].answers.map((answer) => {
    //         return `<input type="radio" name="ans" value="${answer}"> ${answer}<br>`
    //     }).join('')
    //     + '<button type="button" class="check">Submit</button></form>');
    // currentQuestion++;
    // $('.numberOfQuestions').text(currentQuestion);
    // } else {
    // currentQuestion = 0;



    //on click show feedback box 
    $('.questionBox').on('click', '.check', function () {
        let inputVal = $('input[name=ans]:checked').val();
        console.log('Value is ' + inputVal);
        fbForAnswer(inputVal);
        $('.questionBox').hide();
        $('.feedbackBox').show();
    })




    // console.log('STORE[currentQuestion-1].correctAnswer', correctAnswer);
    //$('.questionBox').show();
    //$('feedbackBox').show("${correctAnswer}");



    //next buttom 
    $('.feedbackBox').html('<form id="moveNext">'
        + '<button type="submit" class="nextButton">Next</button></form>');

    $('.feedbackBox').on('click', function () {
        $('.feedbackBox').hide();
        $('.questionBox').show();
        generateQuestions();

    })



    //feedback answer if user select correct answer show 'Correct' else show feedbackbox with text Wrong and correct answer with facts
    function fbForAnswer(input) {
        let feedbackAnswer = STORE[currentQuestion].correctAnswer;

        // if ('STORE[currentQuestion - 1].correctAnswer', correctAnswer
        if (feedbackAnswer === $("input[name='ans']:checked")[0].value) {
            $('.feedbackBox').html(
                `<h3>Correct!</h3> <br>'<button type="submit" class="nextButton">Next</button></form>'`
            );


        } else {
            $('.feedbackBox').html(
                `<h3>Wrong!</h3><br>'<button type="submit" class="nextButton">Next</button></form>'`
            );
            console.log('STORE[currentQuestion-1].correctAnswer', correctAnswer)
            console.log(tellFacts);

        }
    };





})

