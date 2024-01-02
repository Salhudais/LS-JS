const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Choose one: rock, paper, scissors");
let userInput = readline.question();

let computerInput = CHOICES[Math.floor(Math.random() * CHOICES.length)];

prompt(`User selected ${userInput}, computer selected ${computerInput}`);

/*
Winning conditions:
Scissor -> paper
paper -> rock
rock -> scissor
followed by a series of if conditions blah blah blah
*/
if ((userInput === 'scissors' && computerInput === 'paper') ||
  (userInput === 'paper' && computerInput === 'rock') ||
  (userInput === 'rock' && computerInput === 'scissors')) {
  prompt("You win");
} else if ( userInput === computerInput) {
  prompt("Tie");
} else prompt("Computer Wins");
