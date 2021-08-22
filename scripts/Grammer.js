var currIndex = 1; //current Slide index
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

slides[currIndex-1].style.display = "block";
dots[currIndex-1].className += " active";


function currentSlide(n) {
    showSlides(currIndex = n);
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