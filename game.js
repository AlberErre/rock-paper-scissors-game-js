//All Variables
var options = ["Rock","Paper","Scissors"];
var player = document.getElementById('player');
var computer = document.getElementById('computer');
var result = document.getElementById('result');
var vs = document.getElementById('vs');
var win = 'YOU WIN!';
var lose = 'YOU LOSE';
var tied = 'NOBODY WINS XD';

// Game logic will be implemented here
function play (selection) {
    var randomNumber = Math.round (Math.random() * 2);
    console.log(randomNumber);

    if (selection == randomNumber) {
        console.log ("Empate");
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = 'Empate!';
    }
    else if (selection == 0 && randomNumber == 1) {
        console.log ("Perdiste");
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = 'Perdiste!';
    }
    else if (selection == 0 && randomNumber == 2) {
        console.log (win);
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = win;
    }
    else if (selection == 1 && randomNumber == 2) {
        console.log (lose)
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = lose;
    }
    else if (selection == 1 && randomNumber == 0) {
        console.log (win)
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = win;
    }
    else if (selection == 2 && randomNumber == 1) {
        console.log (win)
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = win;
    }
    else if (selection == 2 && randomNumber == 0) {
        console.log (lose)
        player.innerHTML = options[selection];
        vs.innerHTML = 'vs';
        computer.innerHTML = options[randomNumber];
        result.innerHTML = lose;
    }
}

var Rock = document.getElementById('Rock').addEventListener('click', function(){
    play(0);
});

var Paper = document.getElementById('Paper').addEventListener('click', function(){
    play(1);
});

var Scissors = document.getElementById('Scissors').addEventListener('click', function(){
    play(2);
});