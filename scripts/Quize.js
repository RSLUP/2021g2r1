window.onload = function(){
    activeQuize = sessionStorage.getItem("quizeNum");
    quizeName = $(".body-part .card-title")[activeQuize].innerHTML;
    if(activeQuize != null){
        $(".quizes-wrapper").css("display", "flex");
        $(window).scrollTop(0);
        $("body").css("overflow", "hidden");
        $(".body-part, #quiz, .footer").css("pointer-events", "none");
    }
    sessionStorage.clear();
}

let activeQuize;
let quizeName;
let list = $(".body-part .card");

// when user click Quze Button
for(let j=0; j<list.length; j++){
    list[j].onclick = function(){
        activeQuize = j;
        quizeName = $(".body-part .card-title")[j].innerHTML;
        $(".quizes-wrapper").css("display", "flex");
        $(window).scrollTop(0);
        $("body").css("overflow", "hidden");
        $(".body-part, #quiz, .footer").css("pointer-events", "none");
    }
}

// when user click close button in rules window or Exit button in Result window
$(".quizes-wrapper #quize-rules .btn-close, #quize-question .btn-close, #quiz-result .exit-btn").on("click", function(){
    $("#quize-rules").css("display", "block");
    $(".quizes-wrapper #quiz-result").css("display", "none");
    $("#quize-question").css("display", "none");
    $(".quizes-wrapper").css("display", "none");
    $("body").css("overflow", "scroll");
    $(".body-part, #quiz, .footer").css("pointer-events", "visible");
    totalPoint = 0;
    QuesCount = 0;
});

// when user click continue button in rules window
$(".quizes-wrapper #quize-rules .continue-btn").on("click", function(){
    $("#quize-rules").css("display", "none");
    $("#quize-question").css("display", "block");
    $("#quize-question .quiz-title h2:nth-child(2)").html(`${quizeName}`);
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
        answer: 1,
        options: [
            "'ve",
            "has",
            "'s",
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
        Question: "I _____ to the mall after school.",
        answer: 1,
        options: [
            "went",
            "gone",
            "goed",
            "goes"
        ]
    },
    {
        id: 2,
        Question: "My brother _____ a bear an hour ago.",
        answer: 4,
        options: [
            "seen",
            "sees",
            "see",
            "saw"
        ]
    },
    {
        id: 3,
        Question: "_____ Mike visit his grandmother last night?",
        answer: 2,
        options: [
            "Are",
            "Did",
            "Does",
            "do"
        ]
    },
    {
        id: 4,
        Question: "Alex did not _____ last weekend.",
        answer: 3,
        options: [
            "working",
            "worked",
            "work",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "_____ Judy and Liz at last month's meeting?",
        answer: 4,
        options: [
            "Was",
            "is",
            "Are",
            "Were"
        ]
    },

];
let pastCont = [
    {
        id: 1,
        Question: "My brother and sister _____ playing tennis at 11am yesterday.",
        answer: 1,
        options: [
            "were",
            "was",
            "are",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "_____ you still working at 7pm last night?",
        answer: 4,
        options: [
            "did",
            "are",
            "was",
            "Were"
        ]
    },
    {
        id: 3,
        Question: " At 8.30am today I _____ driving to work.",
        answer: 2,
        options: [
            "Were",
            "was",
            "are",
            "did"
        ]
    },
    {
        id: 4,
        Question: "We _____ sleeping when the police came.",
        answer: 3,
        options: [
            "won't",
            "was",
            "weren't",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Why _____ he having lunch at 4pm?",
        answer: 4,
        options: [
            "were",
            "doing",
            "does",
            "was"
        ]
    },

];
let pastPerf = [
    {
        id: 1,
        Question: "We ________ finished eating dinner.",
        answer: 1,
        options: [
            "had not",
            "not had",
            "'d had not",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "Had they _____ to her before?",
        answer: 4,
        options: [
            "spoked",
            "spoke",
            "speaked",
            "spoken"
        ]
    },
    {
        id: 3,
        Question: "You _____ not left yet.",
        answer: 2,
        options: [
            "would had",
            "'d",
            "would",
            "have"
        ]
    },
    {
        id: 4,
        Question: " I had never _____ her before.",
        answer: 3,
        options: [
            "see",
            "saw",
            "seen",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "We arrived at 8:05, but the train _____ already left.",
        answer: 4,
        options: [
            "has",
            "have",
            "are",
            "had"
        ]
    },

];
let pastPerfCont = [
    {
        id: 1,
        Question: "My dad ________ smoking in the garage.",
        answer: 1,
        options: [
            "had been",
            "had",
            "has",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "The printer ________ working well.",
        answer: 4,
        options: [
            "had not",
            "have not",
            "hadn't",
            "had not been"
        ]
    },
    {
        id: 3,
        Question: "Had the players _____ playing by the rules?",
        answer: 2,
        options: [
            "have",
            "been",
            "be",
            "hadn't"
        ]
    },
    {
        id: 4,
        Question: "She ________ expecting the worst.",
        answer: 3,
        options: [
            "had",
            "had being",
            "'d been",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Had the teachers ________ before the strike?",
        answer: 4,
        options: [
            "been work",
            "was working",
            "working",
            "been working"
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
        Question: "I ________ by then.",
        answer: 2,
        options: [
            "will be leave",
            "will have left",
            "will leaving",
            "will not leaving"
        ]
    },
    {
        id: 2,
        Question: "Will you ________ by 8am?",
        answer: 4,
        options: [
            "have arriving",
            "have be arrive",
            "be arrive ",
            "have arrived"
        ]
    },
    {
        id: 3,
        Question: " Sandu and Nishi will be exhausted. They ________ slept for 24 hours.",
        answer: 2,
        options: [
            "will not",
            "will not have",
            "will not be",
            "will not has"
        ]
    },
    {
        id: 4,
        Question: "Where ________ gone?",
        answer: 1,
        options: [
            "will she have",
            "is she has",
            "she have",
            "will be"
        ]
    },
    {
        id: 5,
        Question: "He will have ________ all about it by Monday.",
        answer: 2,
        options: [
            "forgetting",
            "forgotten",
            "be forgetting",
            "forget"
        ]
    },

];
let futurPerfCont = [
    {
        id: 1,
        Question: "My mom ________ for two days by the time I see her.",
        answer: 2,
        options: [
            "has been travelling",
            "will have been travelling",
            "will has been travelling",
            "will have travelling"
        ]
    },
    {
        id: 2,
        Question: "Will you ________ here for ten years by the time of the Christmas party?",
        answer: 4,
        options: [
            "have been worked",
            "have to work",
            "have working",
            "have been working"
        ]
    },
    {
        id: 3,
        Question: "We ________ been waiting long.",
        answer: 1,
        options: [
            "will not have",
            "will have not",
            "have not will",
            "will "
        ]
    },
    {
        id: 4,
        Question: "It's a 24-hour relay. They'll only have been ________ for half the time by 6pm.",
        answer: 3,
        options: [
            "ran",
            "run",
            "running",
            "runs"
        ]
    },
    {
        id: 5,
        Question: "Won't they ________ travelling for two weeks by then?",
        answer: 1,
        options: [
            "have been",
            "had been",
            "has been",
            "having"
        ]
    },

];
//Speech Quiz Questions packs
let noun = [
    {
        id: 1,
        Question: "No It will take all of your energy and will to be able to walk again. What is the noun in the sentence",
        answer: 4,
        options: [
            "Take",
            "All",
            "Your",
            "Energy"
        ]
    },
    {
        id: 2,
        Question: "Sharks and lampreys are not true fish because their skeletons are made of cartilage rather than bone. What is the noun in the sentence",
        answer: 1,
        options: [
            "Bone",
            "True",
            "Because",
            "Their"
        ]
    },
    {
        id: 3,
        Question: "We have a new ______ of books.",
        answer: 3,
        options: [
            "heard",
            "Seize",
            "collection",
            "All"
        ]
    },
    {
        id: 4,
        Question: "The Trojans’ rash decision to accept the wooden horse led to their destruction. What is the noun in the sentence",
        answer: 2,
        options: [
            "Their",
            "Destruction",
            "Led",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "A group of flowers is called a _____.",
        answer: 3,
        options: [
            "bouquet",
            "bunch",
            "one and two",
            "band"
        ]
    },

];
let verb = [
    {
        id: 1,
        Question: "which can be called a sentence? <br> A) wait!<br> B) why? ",
        answer: 1,
        options: [
            "A only",
            "B only",
            "A and B",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "My computer brokebdownn, so I ____ continue my work",
        answer: 2,
        options: [
            "cannot be",
            "could not",
            "can't",
            "couldn't been"
        ]
    },
    {
        id: 3,
        Question: "A verb always has<br>A) an object<br>B) a subject",
        answer: 2,
        options: [
            "A only",
            "B only",
            "A and B",
            "None of these"
        ]
    },
    {
        id: 4,
        Question: "It ____ drizzling  throughout the previous day",
        answer: 1,
        options: [
            "kept",
            "keeps",
            "keep",
            "keeping"
        ]
    },
    {
        id: 5,
        Question: "Have you ____ your lost dog yet?",
        answer: 2,
        options: [
            "find",
            "found",
            "finds",
            "finded"
        ]
    },

];
let adVerb = [
    {
        id: 1,
        Question: "Leon's car goes ______ than benjamin's",
        answer: 3,
        options: [
            "more fast",
            "fastly",
            "faster",
            "fast"
        ]
    },
    {
        id: 2,
        Question: "Which is the correct sentence?",
        answer: 3,
        options: [
            "Really lucy likes pancakes.",
            "lucy likes pancakes really.",
            "lucy really likes pancakes.",
            "lucy likes really pancakes."
        ]
    },
    {
        id: 3,
        Question: "select wrong one?",
        answer: 4,
        options: [
            "everyday - time",
            "almost - degree",
            "sometimes - frequency",
            "yet - manner"
        ]
    },
    {
        id: 4,
        Question: "Identify the adverb in the following sentence<br>I quickly remembered the definition for an adverb.",
        answer: 2,
        options: [
            "remembered",
            "quickly",
            "definition",
            "definition"
        ]
    },
    {
        id: 5,
        Question: "which is a adverb of manner ?",
        answer: 1,
        options: [
            "hard",
            "near",
            "never",
            "now"
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
        Question: "The old woman lived alone, with ---- to look after ----.",
        answer: 4,
        options: [
            "someone / her",
            "anyone / herself",
            "everyone / she",
            "no one / her"
        ]
    },
    {
        id: 2,
        Question: "When the little boy grabbed the lizard, ---- tail broke off in ---- hand.",
        answer: 3,
        options: [
            "it's / his",
            "Rit / him",
            "its / his",
            "its / he's"
        ]
    },
    {
        id: 3,
        Question: " A baby learns the meaning of words as ---- are spoken by others and later uses ---- in sentences.",
        answer: 1,
        options: [
            "they / them",
            "they / themselves",
            "they / it",
            "their / they"
        ]
    },
    {
        id: 4,
        Question: "Find the possessive pronoun in the sentence 'Unless they do all of their homework, they won't allow to play'.",
        answer: 2,
        options: [
            "unless",
            "their",
            "won't",
            "they"
        ]
    },
    {
        id: 5,
        Question: "Which sentence contains the plural 3rd person object pronoun?",
        answer: 4,
        options: [
            "They grow rice and sell it.",
            "She cooks for all of us.",
            "he went to the office.",
            "We catch fish and sell them."
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
        Question: "Would you rather have cheese _____ bologna on your sandwich?",
        answer: 3,
        options: [
            "For",
            "Nor",
            "Or",
            "So"
        ]
    },
    {
        id: 2,
        Question: " _________ he claims that he is innocent, everyone knows he is guilty",
        answer: 1,
        options: [
            "While",
            "Now that",
            "In order that",
            "Until"
        ]
    },
    {
        id: 3,
        Question: "_______ my mother _________my father want me to be a lawyer.",
        answer: 4,
        options: [
            "either…or",
            "Not only… also",
            "Neither…nor",
            "Both…and"
        ]
    },
    {
        id: 4,
        Question: "You need to work harder; ________________, you'll get fired.",
        answer: 1,
        options: [
            "otherwise",
            "moreover",
            "instead",
            "however"
        ]
    },
    {
        id: 5,
        Question: "which sentence is written correctly?",
        answer: 4,
        options: [
            "He enjoys swimming; yet he prefers to play golf.",
            "He enjoys swimming yet he prefers to play golf.",
            "He enjoys swimming, yet he prefers to play golf.",
            "He enjoys swimming. yet he prefers to play golf."
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
    
    // $("#quize-question .quiz-title").html(`
    //     <h2>Question ${quizes[activeQuize][n].id} / 5</h2>
    // `);
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
    let option = document.querySelectorAll("#quize-question .quiz-body div.li");
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
        imgSrc: "../images/QuizeLogo/duck.gif",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 1 correct answer
        imgSrc: "../images/QuizeLogo/notEnough.png",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 2 correct answer
        imgSrc: "../images/QuizeLogo/notEnough.png",
        msg: "Not Enough!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 3 correct answer
        imgSrc: "../images/QuizeLogo/bronze.png",
        msg: "Congratulations!",
        subMsg: `You earned E-net Bronze Trophy for `
    },
    {
        // Massage for 4 correct answer
        imgSrc: "../images/QuizeLogo/silver.png",
        msg: "Congratulations!",
        subMsg: `You earned E-net Silver Trophy for `
    },
    {
        // Massage for 5 correct answer
        imgSrc: "../images/QuizeLogo/golden.png",
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

