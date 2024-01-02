/* Steps:
  1. Request the following:
    1. Loan amount
    2. Annual Percentage Rate
    3. Loan Duration

  2. Compute Monthly Interest Rate
  3. Compute loan duration in months
*/
const readline = require("readline-sync");

function invalidInput(number) {
  return number.trim() === '' ||
         Number(number) < 0 ||
         Number.isNaN(Number(number));
}

while (true) {
  let loanAmount, aPR, loanDuration;
  console.log("What's the loan amount?");
  loanAmount = readline.question();
  while (invalidInput(loanAmount)) {
    console.log("Invalid Input, please input a valid digit");
    loanAmount = readline.question();
  }

  console.log("What's the Annual Percentage Rate(APR)? Please enter using decimal format, such as 0.03 to represent 3%");
  aPR = readline.question();
  console.log("What's the loan duration in year?");
  loanDuration = readline.question();

  let monthlyInterest = aPR / 12;
  let monthDuration = loanDuration * 12;
  let monthlyPayment = loanAmount * (monthlyInterest /
                      (1 - (Math.pow((1 + monthlyInterest),
                        (-monthDuration)))));
  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  console.log("Would you like to perform another calculation? (Y/N)");
  let newCalc = readline.question();
  if (newCalc === 'N' || newCalc === 'n') break;

}