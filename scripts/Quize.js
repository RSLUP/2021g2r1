
// window.onload = function(){
//     let list = $(".card");
//     for(let j=0; j<list.length; j++){
//         list[j].onclick = function(){
//             console.log(j);
//         }
//     }
// }
let activeQuize;
let list = $(".card");
for(let j=0; j<list.length; j++){
    list[j].onclick = function(){
        activeQuize = j;
    }
}

// when user click Start Quze Button
$(".body-part .card").on("click", function (){
    $(".quizes-wrapper").css("display", "flex");
    $(window).scrollTop(0);
    $("body").css("overflow", "hidden");
    $(".body-part, #quiz, .footer").css("pointer-events", "none");
});
// when user click close button in rules window or Exit button in Result window
$(".quizes-wrapper #quize-rules .btn-close, #quiz-result .exit-btn").on("click", function(){
    $("#quize-rules").css("display", "block");
    $(".quizes-wrapper #quiz-result").css("display", "none");
    $("body").css("overflow", "scroll");
    $(".quizes-wrapper").css("display", "none");
    $(".body-part, #quiz, .footer").css("pointer-events", "visible");
    totalPoint = 0;
    QuesCount = 0;
});

// when user click continue button in rules window
$(".quizes-wrapper #quize-rules .continue-btn").on("click", function(){
    $("#quize-rules").css("display", "none");
    $("#quize-question").css("display", "block");
    displayQuesion(0);
});

let Questions = [
    {
        id: 1,
        Question: "What is the full form of RAM",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];

let totalPoint = 0;
let QuesCount = 0;

// when user click next button in Question window
$(".quizes-wrapper #quize-question .next-btn").on("click", function(){
    QuesCount++;
    if(QuesCount < 5){
        displayQuesion(QuesCount);
        if(QuesCount == 4){
            $(".quizes-wrapper #quize-question .next-btn").html("Submit");
        }
    }else{
        $(".quizes-wrapper #quize-question").css("display", "none");
        $(".quizes-wrapper #quiz-result").css("display", "block");
        displayResult();
    }
    
});

function displayQuesion(n){
    // Before user select one of answer next button not display
    $(".quizes-wrapper #quize-question .next-btn").css("display", "none");
    
    $("#quize-question .quiz-title").html(`
        <h2>Question ${Questions[n].id} / 5</h2>
    `);
    $("#quize-question .quiz-body").html(`
    <div class="que-text">
        <span>What does HTML stand for?</span>
    </div>
    <div class="option-list">
        <div class="li">
            <span>Hyper Text markup languege.</span>
        </div>
        <div class="li">
            <span>Hyper Text markup languege.</span>
        </div>
        <div class="li">
            <span>Hyper Text markup languege.</span>
        </div>
        <div class="li" style="margin-bottom: 0;">
            <span>Hyper Text markup languege.</span>
        </div>
    </div>`);
    getUserSelection(Questions[n].answer);
}

// This function is use to lisent user choise. reaction what need
function getUserSelection(ans){
    let option = document.querySelectorAll("div.li");
    for(let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            $("#quize-question .option-list").css("pointer-events", "none");
            $(".quizes-wrapper #quize-question .next-btn").css("display", "block");
            option[ans-1].classList.add("right");
            option[ans-1].innerHTML += `<div class="icon tick"><i class="fas fa-check"></i></div>`;
            if((i+1) == ans){
                totalPoint++;
            }else{
                option[i].classList.add("wrong");
                option[i].innerHTML += `<div class="icon cross"><i class="fas fa-times"></i></div>`;
            }
        }
    }
};

// All 5 type of Messages related to user scores 
let ResultMsg = [
    {
        // Massage for 0 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 1 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 2 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Not Enough!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 3 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Not Enough!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 4 correct answer
        imgSrc: "/images/QuizeLogo/silver.jpg",
        msg: "Good!",
        subMsg: `You earned E-net Silver Badge for `
    },
    {
        // Massage for 5 correct answer
        imgSrc: "/images/QuizeLogo/golden.png",
        msg: "Congratulations!",
        subMsg: `You earned E-net Golden Trophy for `
    }
];

// inject all nessory question and answer in to result body of quize
function displayResult(){
    $("#quiz-result .result-body").html(`
        <div class="image">
            <img src="${ResultMsg[totalPoint].imgSrc}" alt="">
        </div>
        <h3>${ResultMsg[totalPoint].msg}</h3>
        <p>${ResultMsg[totalPoint].subMsg}</p>
        <p>Your Score</p>
        <span><h1><span style="color: rgb(6, 131, 6);">${totalPoint*10}</span> / 50</h1></span>
    `);
}

// when user clik Replay button end of the Quize 
function replayQuiz(){
    totalPoint = 0;
    QuesCount = 0;
    $(".quizes-wrapper #quize-question .next-btn").html("Next");
    $(".quizes-wrapper #quiz-result").css("display", "none");
    $("#quize-question").css("display", "block");
    displayQuesion(0);
}

