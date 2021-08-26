// when user click Start Quze Button
$(".body-part .card-body img").on("click", function (){
    $(".quizes-wrapper").css("display", "flex");
    $(window).scrollTop(0);
    $("body").css("overflow", "hidden");
    $(".body-part, #quiz, .footer").css("pointer-events", "none");
});
// when user click close button in rules window
$(".quizes-wrapper #rules-window .contain-box .btn-close").on("click", function(){
    $("body").css("overflow", "scroll");
    $(".quizes-wrapper").css("display", "none");
    $(".body-part").css("pointer-events", "visible");
});