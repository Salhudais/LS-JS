const readline = require('readline-sync');
let currentPlayer = 0;
const WINNING_LINES = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
];

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(` ${board['1']}   |  ${board['2']}  |   ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['4']}   |  ${board['5']}  |   ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['7']}   |  ${board['8']}  |   ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let i = 1; i <= 9; i++) {
    board[i] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', ending = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return `${arr[0]} ${ending} ${arr[1]}`;
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${ending} ${arr[arr.length - 1]}`;
  }
}
function playerChoosesSquare(board) {
  let square;
  while (true) {
    console.log(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    console.log("Sorry, that's not a valid choice");
  }
  board[square] = HUMAN_MARKER;
}
function atRisk(line, board, marker) {
  let markersInLine = line.map(square => board[square]);
  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) return unusedSquare;
  }
  return null;
}
function computerChoosesSquare(board) {
  let square;
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let line = WINNING_LINES[i];
    square = atRisk(line, board, HUMAN_MARKER);
    if (square) break;
  }
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = atRisk(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 0 ? 1 : 0;
}
function chooseSquare(board, player) {
  if (player === 1) {
    computerChoosesSquare(board);
  } else playerChoosesSquare(board);
}

let board = initializeBoard();
displayBoard(board);
let playerScore = 0;
let computerScore = 0;

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
  displayBoard(board);

  if (someoneWon(board)) {
    console.log(`${detectWinner(board)} won!`);
    if (detectWinner(board) === 'Player') playerScore++;
    else if (detectWinner(board) === 'Computer') computerScore++;
  } else {
    console.log("it's a tie!");
  }

  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log("Play again? (y or n)");
  let answer = readline.question().toLowerCase()[0];
  while (true) {
    if (answer === 'y' ||
        answer === 'n') break;
    else {
      console.log("Please type y to play again or n to stop");
      answer = readline.question().toLowerCase()[0];
    }
  }
  if (answer !== 'y') break;

}
console.log('Thanks for playing Tic Tac Toe!');
