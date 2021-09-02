var currIndex = 1; //current Slide index
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

slides[currIndex-1].style.display = "block";
dots[currIndex-1].className += " active";


function currentSlide(n) {
    showSlides(currIndex = n);
    if($(".body-container .menu .menu-hide").css("display") == "flex"){
        hideMenu();
        $(window).scrollTop(0);
    }
}


function showSlides(n) {
    var j;
    for(j = 0; j < slides.length; j++){
        if(slides[j].style.display = "block"){
            dots[j].className = dots[j].className.replace(" active", "");
            slides[j].style.display = "none";
        }
    }
    slides[currIndex-1].style.display = "block";
    dots[currIndex-1].className += " active";
}

// function for moblid version other lesson button
function showMenu(){
    $(".body-container .menu").css("left", "0");
}
function hideMenu(){
    $(".body-container .menu").css("left", "-100%");
}
$(window).resize(function(){
    if($(this).width() > 752){
        showMenu();
    }else{
        hideMenu();
    }
});

function getQuiz(n){
    sessionStorage.setItem("quizeNum", n);
    location.href = "Quiz.html";
}
