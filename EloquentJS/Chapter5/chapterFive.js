const SCRIPTS = require('/Users/sal/Desktop/LS-JS/EloquentJS/Chapter5/scripts.js');

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
let labels = [];

// No need to predefine action, creating a function value 
// On the spot instead.
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// Abstracting over actions than values
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan(11)); // true

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3,2,1);

function unless(test, then) {
  if (!test) then();
}
repeat(2, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// forEach
["A", "B"].forEach(l => console.log(l));

//Filter to find living languages
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
// console.log(filter(SCRIPTS, script => script.living));
// Filter returns a new array
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(rtlScripts.map(s => s.name));

function reduce(array, combine, start) {
  let current = start;
  for(let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
// We can omit the start element 0

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
console.log(SCRIPTS.reduce((a,b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

// Different approach
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest === null ||
    characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}
console.log(biggest);

function average(array) {
  return array.reduce((a,b) => a + b) / array.length;
}
console.log(Math.round(average(SCRIPTS.filter(s =>
  s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s =>
  !s.living).map(s => s.year))));


// Some takes a test function and tells you whether conditional
// Either return true
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from,to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
console.log(characterScript(20000));

// Convert string to character codes
let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0)); // Half
console.log(horseShoe.codePointAt(0)); // Actual

//Determining whether a character takes up one or two code units
let roseDrag = "🌹🐉";
for (let char of roseDrag) {
  console.log(char);
}

