var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var leftDice = document.getElementById('left-dice');
var rightDice = document.getElementById('right-dice');

leftDice.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
rightDice.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

var winner = document.getElementById('winner')
if ( randomNumber1 > randomNumber2) {
    winner.textContent = " Player 1 Wins!";
}
else if ( randomNumber1 < randomNumber2){
    winner.textContent = " Player 2 Wins!";
} else {
    winner.textContent = "Friendship Wins!";
}