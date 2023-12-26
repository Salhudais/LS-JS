console.log(Math.max(2,4)); // Max element
console.log(Math.min(2,4) + 100) // Min Element

/* Prompts user for number, return type for prompt is a
string so we cast it with Number for conversion */
//let theNumber = Number(prompt("Pick a number"));
//console.log("Your number is the square root of " + 
//            theNumber * theNumber);

//isNaN => is Not a Number
//if (!Number.isNaN(theNumber)) {
    // output
//}

/*
Exercises 1:
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
function loopTriangle() {
    for(let line = '#'; line.length < 8; line += '#') {
        console.log(line);
    }
}
loopTriangle();

/*
Exercise 2:
FizzBuzz */
function fizzBuzz() {
    for(let i = 1; i <= 100; i += 1) {
        let output = "";
        if(i % 3 == 0) output += "Fizz";
        if(i % 5 == 0) output += "Buzz";
        console.log(output || i);
    }
}
fizzBuzz();

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */
function chessBoard(n) {
    /*
    Original Solution:
    Works but it overcomplicates it
    
    let turn = 0;
    for(let i = 0; i < n; i += 1) {
        let str = turn == 0 ? " " : "#";
        let turnsamp = turn == 0 ? 1 : 0;
        for(let j = 1; j < n; j += 1) {
            str += turnsamp == 0 ? " " : '#';
            turnsamp = turnsamp == 0 ? 1 : 0;
        }
        console.log(str);
        turn = turnsamp == 0 ? 1 : 0;
    } */
    let board = "";
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < n; x++) {
            if ((x + y) % 2 == 0) board += " ";
            else board += "#";
        }
        board += "\n";
    }
    console.log(board);
}
chessBoard(8);