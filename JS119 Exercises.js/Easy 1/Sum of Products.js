function summation(x) {
  let sum = 0;
    for (let i = 1; i <= x; i++) {
      sum += i;
    }
  return sum;
}
function product(x) {
  let product = 0;
  for (let i = 1; i <= x; i++) {
    product *= i;
  }
  return product;
}

const readline = require('readline-sync');
console.log("Please enter an integer greater than 0: ");
let number = parseInt(readline.question(), 10);
console.log('Enter "s" to compute the sum, or /"p" to compute the product: ');
let answer = readline.question();



switch (answer) {
  case "s":
    console.log(summation(number));
    break;
  case "p":
    console.log(product(number));
}


