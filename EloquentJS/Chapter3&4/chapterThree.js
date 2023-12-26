const JOURNAL = require('./journal.js');

const square = function(x) {
    return x * x;
};
const power = function(base, exponent) {
    let result = 1;
    for(let i = exponent; i > 0; i--) {
        result *= base;
    }
    return result;
}
console.log(power(2,10));

// Lexical Scoping
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'tahini');
}
console.log(hummus(3));

// Arrow operator in use
const pow = (base, p) => {
    let result = 1;
    for(let count = 0; count < p; count++) {
        result *= base;
    }
    return result;
};

// JS broad-mindedness
function sq(x) { return x * x; }
console.log(square(4, true, "Hedgehog")); // Ignores extra parameters

function minus(a,b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10,5));

// Recursive pw
function pw(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * pw(base, exponent - 1);
    }
}

// Starting from 1, multiply by 3 or add 5 to get n
function findsol(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        }else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findsol(24));
// (((1 * 3) + 5) * 3)


// Exercises:
// Return minimum of two values
function minimum(x,y) {
    return x > y ? y : x;
}
function isEven(n) {
    if(n < 0) return null;
    else if(n == 0) return true;
    else if(n == 1) return false;
    else return isEven(n-2);
}
console.log(isEven(-1));

//Creating Objects for the Jacques problem
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
    "touched tree" : "Touched a tree"
};
delete day1["touched tree"];
console.log("events" in day1);
console.log(Object.keys(day1));

//Assigning all properties from one object to another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

//Array of Objects
let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

/*
Given two boolean variables, we can measure the correlation
using the phi coefficient (ϕ) */
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) *
    (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9,4,1])); // Weak correlation

// Extract a 2 by 2 table in prep for Phi
function tableFor(event, journal) {
    let table = [0,0,0,0];
    for(let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

function journalEvents(journal) {
    let events = [];
    for(let entry of journal) {
        for(let event of entry.events) {
            if(!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
for(let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if(correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

for(let entry of JOURNAL) {
    if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

/* shift returns and removes front of list, unshift adds to front of list */
let todoList = [];
function remember(task) {todoList.push(task);}
function getTask() {todoList.shift();}
function rememberUrgently(task) {todoList.unshift(task);} 

// Searching for an index of a value and in reverse
// indexOf take an optional argument indicating where to start
console.log([1,2,3,4,5].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));

// Slicing elements [x,y)
console.log([1,2,3,4,5].slice(2,4));

//.concat to merge an element


/* String methods including:
    trim(removes white spaces, tabs, etc)
    padStart(sizelimit, whattoadd)
    split(char) -> splits on every char occurrence, returns an array
    join(". ") -> joins an array by argument. 
    repeat(int) -> repeats a string int amount of times
*/

// Given an arbitrary amount of parameters, how to best handle them?
function max(...numbers) {
    let result = -Infinity;
    for(let number of numbers) {
        if(number > result) result = number;
    }
    return result;
}
let numbers = [1,2,3,4,5];
// rest parameter works for methods with only one parameter.
console.log(max(...numbers));

/* Serializing data with JSON */

let string = JSON.stringify({squirrel:false, events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);

// Exercises:
function range(start,end, step = 1) {
    let lst = [];
    while((start <= end && step > 0) || (start >= end && step < 0)) {
        lst.push(start);
        start = step < 0 ? start - 1 : start + 1;
    }
    return lst;
}
function sum(lst) {
    let sum = 0;
    for(let i of lst) {
        sum += i;
    }
    return sum;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

//Reverse an Array inplace and one using a new array
function reverseArray(lst) {
    let newlst = [];
    for(i = lst.length -1; i >= 0; i--) {
        newlst.push(lst[i]);
    }
    return newlst;
}
function reverseArrayInPlace(lst) {
    for(let i = 0; i < Math.floor(lst.length / 2); i++) {
        const temp = lst[i];
        lst[i] = lst[lst.length - 1 - i];
        lst[lst.length -1 - i] = temp;
    }
    return lst;
}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

function arrayToList(arr) {
    let list = null;
    for(let i = arr.length -1; i >= 0; i--) {
        list = {value : arr[i], rest : list};
    }
    return list;
}
function listToArray(lst) {
    let arr = [];
    for(let i = lst; i != null; i = i.rest) {
        arr.push(i.value);
    }
    return arr;
}
function prepend(el, lst) {
    return {value: el, rest: lst};
}
function nth(lst, n) {
    for(let node = lst; node; node = node.rest) {
        if (n == 0) return node.value;
        n--;
    }
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1))

function deepEqual(a,b) {
    if(a === b) return true;
    if(typeof a != "object" || a == null || typeof b != "object" || b == null) {
        return false;
    }
    let keyA = Object.keys(a), keyB = Object.keys(b);
    if(keyA.length != keyB.length) return false;
    for(let key of keyA) {
        if(!keyB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
