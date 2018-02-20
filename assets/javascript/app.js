


//To DO
// on loading bring up game summary / rules

$(document).ready(function () {

    var questionArr = [
        {
            question: "What is the capital of New Jersey?",
            choices: ["Hamilton", "Cherry Hill", "Edison", "Trenton"],
            correctAnswer: "Trenton"
        },
        {
            question: "What is the state bird of New Jersey?",
            choices: ["Cardinal", "Bluejay", "Raven", "American Goldfinch"],
            correctAnswer: "American Goldfinch"
        },
    ]

    //Starting at zero
    console.log(questionArr)
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var counter = seconds;
    var seconds = 30;


    // //Hide Elements
    // $("#submitBtn").hide()

    //Click start button to begin the game. 
    $("#startBtn").on("click", function () {
        loadQuestion()
    })

    function loadQuestion() {

        // for (var j=0; j<questionArr.length;j++) {
        $("#question").html("<h4>" + questionArr[currentQuestion].question + "</h4>");

        for (var i = 0; i < questionArr[currentQuestion].choices.length; i++) {
            $("#question").append("<button class='choiceBtn' id='button' multChoice='" + questionArr[currentQuestion].choices[i]
                + "'>" + questionArr[currentQuestion].choices[i] + "</button>");
        }

        currentQuestion++;
        console.log(currentQuestion);
        console.log("The current choice array is: " + questionArr[currentQuestion].choices[i])

    }

    // }

    //Psuedo Code

    //---------------------------------------- Answer Logic--------------------------------------------------------------------------------------
    $(".choiceBtn").on("click", function (event) {
        answerClick(event)
        console.log("you clicked a button")
    })

    function answerClick(event) {
        console.log("you clicked a button")

        if ($(event.target).attr("multChoice") === questionArr[currentQuestion].correctAnswer) {
            console.log("correct")
            // this.answeredCorrectly();
        }
        else {
            console.log("incorrect")
            // this.answeredIncorrectly();
        }

    }




    //function answerCorrect()
    //if user selects correct answer alert "good job", 
    //Correct++
    //currentQuestion++
    //loadQuestion()



    //function answerIncorrect()
    //if user selects incorrect answer alert they're wrong 
    //incorrect++
    //currentQuestion++
    //loadQuestion()



    //---------------------------------------Question Timer-----------------------------------------------------------------------------------------


    //function quetionTimer() {
    //counter--;
    //$("#counter-number").text(game.counter);
    // if (game.counter === 0) {
    //console.log("TIME UP");
    //timeOut();
    // }



    //---------------------------------------Timeup Function-----------------------------------------------------------------------------------------

    //function timeOut ()
    //If question timer = 0 then;
    //Unanswered++
    //currentQuestion++
    //loadQuestion()


    //---------------------------------------Game Reset Function-----------------------------------------------------------------------------------------

    //function reset() {
    //currentQuestion = 0;
    //counter = countStartNumber;
    //correct = 0;
    //incorrect = 0;
    //loadQuestion();
    //  }

    //-----------------------------------------psuedo code---------------------------------------------------------------------------------------------


    //     set a timer for each question of 15 seconds


    //         if questions left = 0
    //         display final status
    //         if questionsCorrect>=7, then win++


    //         would you like to play again



})






