// Q1:
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = "";
advice.split(' ').forEach(ele => {
  if (ele !== "important") newAdvice += ele + " ";
  else newAdvice += "urgent" + " ";
});
newAdvice.trim();

//Alternative Q1:
advice.replace("important", "urgent"); // Only the first Occurrence

// Q2
let numbers = [1, 2, 3, 4, 5];
//Reverse + Slice
let newNumbers = numbers.slice().reverse();
console.log(newNumbers);

//Sort + Spread
newNumbers = [...numbers].sort((num1,num2) => num2 - num1);
console.log(newNumbers);

//Q2 Bonus
newNumbers = [];
numbers.forEach(num => {
  newNumbers.unshift(num);
});
console.log(newNumbers);

// Q3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let num1 = 8;
let num2 = 95;
console.log(numbers.includes(num1), numbers.includes(num2));

// Q4
let famousWords = "seven years ago...";
console.log("Four score and " + "seven years ago...");
console.log("Four score and ".concat(famousWords));

// Q5
numbers = [1,2,3,4,5];
numbers.splice(2,1);
console.log(numbers);

// Q6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
let newFlint = [];
flintstones.forEach(arr => {
  newFlint = newFlint.concat(arr);
});
// Alternative:
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
// Alternative
flintstones = [].concat(...flintstones); // spread

// Q7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let arr = Object.entries(flintstones).filter(pair => pair[0] === "Barney");

// Q8
numbers = [1,2,3,4,5];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Object.entries(numbers).length === numbers.length,
  Object.entries(table).length === table.length);

// Alternative
console.log(Array.isArray(table), Array.isArray(table));

// Q9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
title = title.padStart(padding + title.length);
title = title.padEnd(padding + title.length);
console.log(title);

//Q10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(el => el === 't').length);
console.log(statement2.split('').filter(el => el === 't').length);