// Requires the modules necessary.
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
/*
Remember that in != of, where in iterates through the indexes and of 
iterates through the elements.
*/

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else counts[known].count++;
  }
  return counts;
}
console.log(countBy([1,2,3,4,5], n => n > 2 ));

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "no scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

let arrays = [[1,2,3], [4,5], [6]];
console.log(arrays.reduce((a,b) => {
  return a.concat(b);
}, []));

function loop(value, testf, updatef, bodyf) {
  let val = value;
  while (testf(val)) {
    bodyf(val);
    val = updatef(val)
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

function every(array, test) {
  let answer  = true;
  for (let i of array) {
    if (!test(i)) {
      answer = false;
      break;
    }
  }
  return answer;
}

function everySome(array, test) {
  return !array.some(element => !test(element));
}

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));

function dominantDirection(text) {
  let ltr = 0, rtl = 0;
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name !== "none");

  console.log(scripts);
  scripts.forEach(x => {
    for (let obj of SCRIPTS) {
      if (obj.name === x.name) {
        if (obj.direction === "ltr") ltr++;
        else rtl++;
      }
    }
  });
  return  ltr > rtl ? "ltr" : "rtl";
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
// → true


console.log(every([2,4,16], n => n < 10));

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) arr[j] = [arr[i], arr[i] = arr[j]][0];
    }
  }
  return arr;
}
console.log(bubblesort([1,4,6,2,1,3,5]));

function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = Infinity;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        let temp = arr[i];
        arr[i] = smallest;
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function insertions(arr) {
  for (let j = 2; j < arr.length; j++) {
    let key = arr[j];
    let i = j-1;
    while (i >= 0 && arr[i] > key) {
      arr[i+1] = arr[i];
      i -= 1;
    }
    arr[i+1] = key;
  }
  return arr;
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    right = mergeSort(arr.slice(0, mid)),
    left = mergeSort(arr.slice(mid));

  return merge(left, right);
};


const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }

  return sorted.concat(arr1.slice().concat(arr2.slice()));

};

console.log(mergeSort([31, 27, 28, 42, 13, 8, 11, 30, 17, 41,
  15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6,
  29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25,
  18, 33, 47, 4, 45, 39, 23, 2]));
