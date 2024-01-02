// Q1
let numbers = [1,2,3,4];
numbers.splice(0, numbers.length);

// Alternative
numbers.length = 0;
//Alternative
numbers = [];
//Alternative
while (numbers.length > 1) {
  numbers.pop();
}

//Q5
function isColorValid(color) {
  return color === "green" || color === "blue";
  //
}
