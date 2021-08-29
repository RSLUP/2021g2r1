
let activeQuize;
let quizeName;
let list = $(".body-part .card");

// when user click Quze Button
for(let j=0; j<list.length; j++){
    list[j].onclick = function(){
        activeQuize = j;
        quizeName = $(".body-part .card-title")[j].innerHTML;
        console.log(quizeName);
        $(".quizes-wrapper").css("display", "flex");
        $(window).scrollTop(0);
        $("body").css("overflow", "hidden");
        $(".body-part, #quiz, .footer").css("pointer-events", "none");
    }
}

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

// present Times Questions pack
let simplePres = [
    {
        id: 1,
        Question: "Do you ______ chocolate milk?",
        answer: 1,
        options: [
            "like",
            "likes",
            "be like",
            "liking"
        ]
    },
    {
        id: 2,
        Question: "He ___ not want to go to the movies.",
        answer: 2,
        options: [
            "do",
            "does",
            "is",
            "be"
        ]
    },
    {
        id: 3,
        Question: "My parents ______ in a two-bedroom apartment.",
        answer: 1,
        options: [
            "live",
            "lives",
            "are live",
            "living"
        ]
    },
    {
        id: 4,
        Question: "You _____ so happy today!",
        answer: 2,
        options: [
            "looks",
            "seem",
            "be",
            "looking"
        ]
    },
    {
        id: 5,
        Question: "They're not here. They _________ right now.",
        answer: 3,
        options: [
            "go to school",
            "swim at the beach",
            "are on holiday",
            "jogging"
        ]
    },

];
let presntCont = [
    {
        id: 1,
        Question: "_____ they coming over for dinner?",
        answer: 2,
        options: [
            "Is",
            "Are",
            "Am",
            "Does"
        ]
    },
    {
        id: 2,
        Question: "I _____ my dinner right now.",
        answer: 3,
        options: [
            "eat",
            "eating",
            "am eating",
            "eats"
        ]
    },
    {
        id: 3,
        Question: "They are _____ a new shopping mall downtown.",
        answer: 1,
        options: [
            "opening",
            "opened",
            "was open",
            "open"
        ]
    },
    {
        id: 4,
        Question: "I _____ at the hair salon until September.",
        answer: 3,
        options: [
            "work",
            "be working",
            "am working",
            "works"
        ]
    },
    {
        id: 5,
        Question: "Why ________ playing football tomorrow?",
        answer: 3,
        options: [
            "he not is",
            "he isn't",
            "isn't he",
            "do he"
        ]
    },

];
let presntPerf = [
    {
        id: 1,
        Question: "We _____ never eaten Mexican food.",
        answer: 2,
        options: [
            "is",
            "have",
            "has",
            "are"
        ]
    },
    {
        id: 2,
        Question: "They___ gone to a rock concert.",
        answer: 3,
        options: [
            "'s",
            "'es",
            "'ve",
            "was"
        ]
    },
    {
        id: 3,
        Question: "Lindsay _____ not been to France.",
        answer: 1,
        options: [
            "has",
            "is",
            "have",
            "are"
        ]
    },
    {
        id: 4,
        Question: "Andrea has _____ her umbrella.",
        answer: 3,
        options: [
            "forget",
            "forgetting",
            "forgotten",
            "forgot"
        ]
    },
    {
        id: 5,
        Question: "The children ________ the lost puppy.",
        answer: 3,
        options: [
            "have find",
            "is finding",
            "have found",
            "are find"
        ]
    },

];
let presPerfCont = [
    {
        id: 1,
        Question: "It has _____ snowing a lot this week.",
        answer: 2,
        options: [
            "be",
            "been",
            "being",
            "seem"
        ]
    },
    {
        id: 2,
        Question: "Rick _____ been studying hard this semester.",
        answer: 1,
        options: [
            "'s",
            "s",
            "'ve",
            "were"
        ]
    },
    {
        id: 3,
        Question: "I'm tired because I _____ been working out.",
        answer: 3,
        options: [
            "'ve",
            "has",
            "have",
            "is"
        ]
    },
    {
        id: 4,
        Question: "We have been watching TV _____ we had dinner.",
        answer: 2,
        options: [
            "for",
            "since",
            "by",
            "during"
        ]
    },
    {
        id: 5,
        Question: "Did you know he's been teaching German _____ fifteen years?",
        answer: 3,
        options: [
            "before",
            "since",
            "for",
            "by"
        ]
    },

];
// Past Times Questions pack
let simplePast = [
    {
        id: 1,
        Question: "simple Past",
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
let pastCont = [
    {
        id: 1,
        Question: "Past Continues",
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
let pastPerf = [
    {
        id: 1,
        Question: "past Perfect",
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
let pastPerfCont = [
    {
        id: 1,
        Question: "past perfect Continus",
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
// Future Times Questions pack
let simpleFutu = [
    {
        id: 1,
        Question: "He _____ arrive on time.",
        answer: 1,
        options: [
            "will",
            "is",
            "not",
            "are"
        ]
    },
    {
        id: 2,
        Question: "It ________ tomorrow.",
        answer: 3,
        options: [
            "snows",
            "is snowing",
            "will snow",
            "have snow"
        ]
    },
    {
        id: 3,
        Question: "We won't ________ until we get there.",
        answer: 2,
        options: [
            "knowing",
            "know",
            "have know",
            "has know"
        ]
    },
    {
        id: 4,
        Question: "Will your folks _____ before Tuesday?",
        answer: 2,
        options: [
            "leaving",
            "leave",
            "leaves",
            "is leave"
        ]
    },
    {
        id: 5,
        Question: "I ________ back before Friday.",
        answer: 4,
        options: [
            "will",
            "have",
            "am being",
            "'ll be"
        ]
    },

];
let futureCont = [
    {
        id: 1,
        Question: "They ______________ when I arrive there at tomorrow night.",
        answer: 2,
        options: [
            "slept",
            "will be sleeping",
            "will sleeping",
            "are going to sleep"
        ]
    },
    {
        id: 2,
        Question: "Will you be _____________ there when I arrive?",
        answer: 1,
        options: [
            "waiting",
            "waited",
            "wait",
            "have waited"
        ]
    },
    {
        id: 3,
        Question: "They ________ the cottage that weekend.",
        answer: 2,
        options: [
            "using",
            "'ll be using",
            "'re be using",
            "are use"
        ]
    },
    {
        id: 4,
        Question: "Nadun _____ be coming to the picnic.",
        answer: 1,
        options: [
            "won't",
            "won't not",
            "willn't",
            "will have"
        ]
    },
    {
        id: 5,
        Question: "I'll try my best to spot you. What ________ wearing?",
        answer: 3,
        options: [
            "will you",
            "will",
            "will you be",
            "has you"
        ]
    },

];
let futurPerf = [
    {
        id: 1,
        Question: "FuturPerfct",
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
let futurPerfCont = [
    {
        id: 1,
        Question: "future perfect Continues",
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
//Speech Quiz Questions packs
let noun = [
    {
        id: 1,
        Question: "Noun",
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
let verb = [
    {
        id: 1,
        Question: "verb",
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
let adVerb = [
    {
        id: 1,
        Question: "adverb",
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
let adject = [
    {
        id: 1,
        Question: "Choose which word is an adjective in following sentence. <li>The round ball bonced.</li>",
        answer: 1,
        options: [
            "Round",
            "Ball",
            "Bounced",
            "The"
        ]
    },
    {
        id: 2,
        Question: "What is the proper order for the adjectives in following sentence. <li>For the holiday dinner, my grandmother served a _______________ turkey.</li>",
        answer: 2,
        options: [
            "golden-brown, roasted, huge",
            "huge, golden-brown , roasted",
            "huge , roasted , golden-brown",
            "golden-brown, huge , roasted"
        ]
    },
    {
        id: 3,
        Question: "What is the proper order for the adjectives in following sentence. <li>We opened the basket and saw __________ kittens inside.</li>",
        answer: 3,
        options: [
            "striped, orange, tiny",
            "tiny, striped, orange",
            "tiny, orange, striped",
            "striped, tiny, orange"
        ]
    },
    {
        id: 4,
        Question: "Decide which is the most appropriate form of the adjective. <li>When the rotten egg broke open, it released a __________ smell.</li>",
        answer: 1,
        options: [
            "disgusting",
            "disgustingest",
            "disgustingly",
            "worst"
        ]
    },
    {
        id: 5,
        Question: "Decide which is the most appropriate form of the adjective. <li>On the day I was supposed to meet him, I came down with the __________ cold.</li>",
        answer: 1,
        options: [
            "worst",
            "baddest",
            "most baddest",
            "worse"
        ]
    },

];
let pronoun = [
    {
        id: 1,
        Question: "preonun",
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
let preposi= [
    {
        id: 1,
        Question: "I have no experience, So I'm ___ a disadvantage when it comes to this job interview.",
        answer: 1,
        options: [
            "at",
            "in",
            "with",
            "of"
        ]
    },
    {
        id: 2,
        Question: "Choose preposition correctly. <li>I am pleased ________ my exam results.</li>",
        answer: 4,
        options: [
            "with",
            "about",
            "at",
            "All of above"
        ]
    },
    {
        id: 3,
        Question: "Choose most suitable preposition. <li>I heard that he died ___ a heart attack.</li>",
        answer: 1,
        options: [
            "of",
            "to",
            "for",
            "about"
        ]
    },
    {
        id: 4,
        Question: "Fill in the blank with Choosing preposition correctly. <li>I am sorry ____ breaking your window.</li>",
        answer: 3,
        options: [
            "of",
            "at",
            "for",
            "with"
        ]
    },
    {
        id: 5,
        Question: "Choose most suitable preposition. <li>I ran ___ Tom while I was in the library. I haven't seen him for ages.</li>",
        answer: 2,
        options: [
            "in",
            "into",
            "on",
            "at"
        ]
    },

];
let conjuc = [
    {
        id: 1,
        Question: "conjuction",
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

let quizes = [simplePres,presntCont,presntPerf,presPerfCont
            ,simplePast,pastCont,pastPerf,pastPerfCont
            ,simpleFutu,futureCont,futurPerf,futurPerfCont
            ,noun,verb,adVerb,adject,pronoun,preposi,conjuc];


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
        <h2>Question ${quizes[activeQuize][n].id} / 5</h2>
    `);
    $("#quize-question .quiz-body").html(`
    <div class="que-text d-flex">
        <span class="me-2">0${quizes[activeQuize][n].id}.</span>
        <span class="me-1">${quizes[activeQuize][n].Question}</span>
    </div>
    <div class="option-list">
        <div class="li">
            <span>${quizes[activeQuize][n].options[0]}</span>
        </div>
        <div class="li">
            <span>${quizes[activeQuize][n].options[1]}</span>
        </div>
        <div class="li">
            <span>${quizes[activeQuize][n].options[2]}</span>
        </div>
        <div class="li" style="margin-bottom: 0;">
            <span>${quizes[activeQuize][n].options[3]}</span>
        </div>
    </div>`);
    getUserSelection(quizes[activeQuize][n].answer);
}

// This function is use to lisent user choise.and get nessosary reaction for that.
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
// All Quizes type name Array

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
        <p>${ResultMsg[totalPoint].subMsg}${quizeName}</p>
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

