/* Structure of Calculator Program:
    1. Ask the user for first number
    2. Ask the user for second number
    3. Ask user for an operation to perform
    4. Perform the operation
    5. Print the result

  Todo's: Internationalize program
*/
const readline = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
prompt(MESSAGES['Welcome']);

while (true) {
  prompt(MESSAGES['numOne']);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(MESSAGES['notNum']);
    number1 = readline.question();
  }

  prompt(MESSAGES['numTwo']);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES['notNum']);
    number2 = readline.question();
  }

  prompt(MESSAGES['operation']);
  let operation = readline.question();
  while (!['1','2','3','4'].includes(operation)) {
    prompt(MESSAGES['notOperation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt(MESSAGES['newCalc']);
  let answer = readline.question();
  if (answer !== 'y') break;
}
