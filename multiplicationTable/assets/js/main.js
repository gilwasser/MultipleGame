
var first;
var second;
var mode;
init();

function init() {
    mode = 10 ;
    reset();
}

function reset() {
    classRemove();
    randoms();
}

function classRemove(){
    $(".square").removeClass("wrong");
    $(".square").removeClass("correct");
    $("#head").removeClass("correct");
    
}

function randoms(){
    first = Math.floor(Math.random() * (mode + 1));
    second = Math.floor(Math.random() * (mode + 1) );
    $("#first").text(first);
    $("#second").text(second);
    $(".square").text(function () {
        return Math.floor(Math.random() * (mode * mode +1 ));
    });
    var rand = Math.floor(Math.random() * 6) + 1;
    $(".square:nth-child(" + rand + ")").text(first * second);
    $("#message").text("");
}


$(".square").click(function () {
    console.log($(this).text());
    if (Number($(this).text()) === first * second) {
        $(".square").addClass("correct");
        $(".square").text(first * second);
        $("#head").addClass("correct");
    } else {
        $(this).addClass("wrong");
        $("#message").text("Try Again !");
    }
});

$("#new").click(function () {
    reset();
});

$("#easy").click(function () {
    $("#easy").addClass("clicked");
    $("#hard").removeClass("clicked");
    mode = 10;
    reset();
    $("#message").text("Select Numebr")
});

$("#hard").click(function () {
    $("#easy").removeClass("clicked");
    $("#hard").addClass("clicked");
    mode = 100;
    reset();
    $("#message").text("Select Numebr")
})
