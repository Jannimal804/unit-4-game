$(document).ready(function() { start(); });

var MagicNumber =0;
var userClicked = 0;
var wins = 0;
var losses = 0;
var blueGemValue = 0;

function start() {

	// This gets called every time the blue crystal gets clicked
	$("#blue").on("click", function() {
	    MagicNumber = MagicNumber - blueGemValue;
		// re-renders the 'MagicNumber' on the screen with the new value to count down.
        $("#magicNumber").html('Magic Number: ' + MagicNumber);

	});

    $(".gems").empty();
    
    MagicNumber =Math.floor(Math.random() * 10);
    $("#magicNumber").html('Magic Number: ' + MagicNumber);

    blueGemValue = 1; // + Math.floor(Math.random() * 1);
    
    
    
    
    pinkgemGemValue = 1;

//    for(var i = 0; i < 4; i++){
//
//        var random = Math.floor(Math.random() * 12) + 1;
//
//        var gems = $("<div>");
//        gems.attr({
//            "class":'gems',
//            //"id":'gems',
//            "data-random": random
//        });
//
//        $(".gems").append(gems);
//    }

}

$("gems").on('click', function() {
  alert("I am an alert box!");
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if(previous > MagicNumber) {
        lost--;
        $("#lost").html(win);
        start();
    }
    else if(previous === MagicNumber) { 
        win++;
        $("#win").html(win);
        start();
    }

});

//reset all variables once game is won/lost
//whenever user clicks (on.click) a gem, the random number is subtracted from total score.
//if else statement for winning or losing


// var randomNumber = 18 + Math.floor(Math.random() * 120);

// //displays Magic Number

// $("#MagicNumber").html(randomNumber);
// console.log(randomNumber);


// //computer randomly selects a number between 1-12 for each gem

// var pinkGem = 1 + Math.floor(Math.random() * 12);
// var greenGem = 1 + Math.floor(Math.random() * 12);
// var purpleGem = 1 + Math.floor(Math.random() * 12);

// //set all variables to 0


// $("#totalNum").html(userClicked);
// $("#wins").html(wins);
// $("#losses").html(losses);

// //reset all variables once game is won/lost

// var reset = function() {
//     userClicked = 0;
//     randomNumber = 18 + Math.floor(Math.random() * 120);
//     blueGem = 1 + Math.floor(Math.random() * 12);
//     pinkGem = 1 + Math.floor(Math.random() * 12);
//     greenGem = 1 + Math.floor(Math.random() * 12);
//     purpleGem = 1 + Math.floor(Math.random() * 12);
//     console.log(randomNumber);
//     $("#numToGuess").html(randomNumber);
//     $("#totalNum").html(userClicked);
//     $("#wins").html(wins);
//     $("#losses").html(losses);
// }

// //if else statement for winning or losing. 

// var winCheck = function() {
//     if (userTotal == randomNumber) {
//         wins++;
//         alert("Hooray! You won!");
//         $("#wins").html(wins);
//         reset();

//     } else if (userClicked > randomNumber) {
//         losses++;
//         alert("Mercury must be in retrograde! Try Again!");
//         $("#losses").html(losses);
//         reset();
//     }
// };

// //whenever user clicks (on.click) a gem, the random number is added to total score.

// $("#purple").on("click", function() {
//     userClicked = userClicked + purpleGem;
//     console.log(userClicked);
//     $("#totalNum").html(userClicked);
//     winCheck();
// })


// $("#blue").on("click", function() {
//     userClicked = userClicked + blueGem;
//     console.log(userClicked);
//     $("#totalNum").html(userClicked);
//     winCheck();
// })