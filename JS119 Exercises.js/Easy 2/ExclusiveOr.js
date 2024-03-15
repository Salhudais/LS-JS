function xor(a,b) {
  return (a && !b) || (!a && b) ? true : false;
}
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

function randomAge() {
  console.log("Teddy is "  + (Math.round(Math.random() * (120 - 20 + 1)) + 20));
}

const centerOf = (x) => {
  if (x.length % 2 !== 0) return x[((x.length - 1) / 2)];
  else return x.substring(Math.floor((x.length - 1) / 2),
    Math.floor((x.length - 1) / 2) + 2);
};

const negative = number => {
  return number > 0 ? number * -1 : number;
};

console.log(negative(-5));
console.log(negative(-3));
console.log(negative(1));
