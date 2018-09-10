//function to start game
$(document).ready(function () {

    var randComp = Math.floor(Math.random() * 102) + 19;
    $(".randnum").text(randComp);
    var randomRuby = Math.floor(Math.random() * 12) + 1;
    var randomDiamond = Math.floor(Math.random() * 12) + 1;
    var randomJade = Math.floor(Math.random() * 12) + 1;
    var randomGold = Math.floor(Math.random() * 12) + 1;
    var win = 0;
    var loose = 0;
    var randNumbers = [];
    var totalScore = 0;

    var rubySound = document.createElement("audio");
    rubySound.setAttribute("src", "assets/sound/prism-1.mp3");

    var goldSound=new Audio("assets/sound/piston-3.mp3");
    var diamondSound=new Audio("assets/sound/piston-1.mp3");
    var jadeSound=new Audio("assets/sound/piston-2.mp3");

    var img = $("<img>");

    //computer chooses random number
    function reset() {
        randNumbers = [];
        randComp = Math.floor(Math.random() * 102) + 19;
        $(".randnum").text(randComp);
        randomRuby = Math.floor(Math.random() * 12) + 1;
        randomDiamond = Math.floor(Math.random() * 12) + 1;
        randomJade = Math.floor(Math.random() * 12) + 1;
        randomGold = Math.floor(Math.random() * 12) + 1;
        totalScore = "0";
        $("#tscoreNO").text(totalScore);
    }

    //if select one option:
    //generate random number
    //add to total score

    $("#ruby").on("click", function () {
        $("#result").fadeOut();
        rubySound.play();
        randNumbers.push(randomRuby);
        var sum = add(randNumbers);
        console.log(randNumbers);
    
    });

    $("#diamond").on("click", function () {
        $("#result").fadeOut();
        diamondSound.play();
        randNumbers.push(randomDiamond);
        console.log(randNumbers);
        var sum = add(randNumbers);
    });

    $("#jade").on("click", function () {
        $("#result").fadeOut();
        jadeSound.play();
        randNumbers.push(randomJade);
        console.log(randNumbers);
        var sum = add(randNumbers);
    });

    $("#gold").on("click", function () {
        $("#result").fadeOut();
        goldSound.play();
        randNumbers.push(randomGold);
        console.log(randNumbers);
        var sum = add(randNumbers);
        console.log(sum);
    });

    //add numbers in array and store them in total score
    function add(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        $("#tscoreNO").text(sum);
        losses(sum);
        wins(sum);
        return sum;
    }


    //if the total score is equal to random number:
    //add 1 point to win
    //display result msg 
    //reset random number
    function wins(sum) {
        if (sum === randComp) {
            img.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            win++;
            $("#wins").text(win);
            $("#result").fadeIn();
            $("#result").text("One point up!! Great job!!");
            reset();
        }
    }

    //if the total score is greater than the random number:
    //add 1 point to loose
    //display result msg
    //reset random number

    function losses(sum) {
        if (sum > randComp) {
            loose += 1;
            $("#looses").text(loose);
            $("#result").fadeIn();
            $("#result").text("You went over the number but give it another try!!");
            reset();

        }
    }
});