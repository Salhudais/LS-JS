let str = 'abcdefghi';
console.log(str[2]); // => 'c'
str.slice(2,5); // 'cde' non inclusive 5
str.slice(2); // [2, to the end]
str.slice(); // returns a copy
str.slice(-4, -2); // string length + index

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(arr.slice(2, 5)[0]); // => 'c'

let obj = { apple: 'fruit', carrot: 'vegetable', pear: 'fruit' };
let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(capitals);
Object.values(capitals);

// Check if a property has it's own property with undefined as it's value
let obj1 = { a: 'foo', b: 'bar', c: undefined};
obj1.hasOwnProperty('c');
obj1.hasOwnProperty('d');

Object.keys(obj1).includes('c');
Object.keys(obj1).includes('d');


arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
Object.keys(arr); // => [0,1,2,boo, -1]
// Length excludes object properties such as other objects or
// key value properties


console.log("This is a string".split());
// Returns an array with string as it's only element

'abcdef'.split(''); // [a,b,c,d,e,f];


// Converting an object to an array using .entries
obj = {sky: 'blue', grass: 'green'};
Object.entries(obj); // => ['sky', 'blue]...

console.log('    abcdef   '.trim());
// Removes space characters as well as whitespace characters
// such as \n and \t

let sentence = "It's a walk in the park.";
console.log(sentence.charAt(5));

/* Distinction between [] and charAt is
when using indices that do not exist, charAt
returns  an empty string whereas [] returns
undefined */

// Return the unicode code point of a character
console.log('abcdef'.charCodeAt(1));

//From unicode character point to a character
console.log(String.fromCharCode(97));


// PEDAC GUIDED PRACTICE
/*
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

UNDERSTAND THE PROBLEM:
- Structure of the building blocks is in cubes
- Topmost is a single block
- Upper layer must be suported by four lower blocks
- no gaps between the blocks

Questions:
- Does that imply that if the topmost is 1 block,
it's held up by 4 blocks underneath? What if it's 2 blocks? 
Does that mean it's supported by 8 blocks our the union of the 4 blocks supporting it.


- Input: Integer for a specific number or cubes
- Output: Integer for left over cubes after building tallest possible valid structure

Explicit Rules:
- Structures are build with blocks:
  - blocks are cubes
  - six-sided, have square faces, with equal lengths on all sides
- Top layer consists of a single block
- Block in an upper layer must be supproted by 4 blocks in a lower layer
- Block in a lower layer can support more than one block in an upper layer
- Layers are solid structures, no gaps between blocks in a layer

Implicit Rules:

*/

function calculateLeftoverBlocks(x) {
  // Squares
  let leftover = x;
  let i = 1;
  while (Math.pow(i, 2) <= leftover) {
    leftover -= Math.pow(i, 2);
    i++;
  }
  return leftover;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

function sortStringsByConsonants(str) {
  let consList = [];
  for (let i = 0; i < str.length; i++) {
    let curr = 0;
    let global = 0;

    for(let x = 0; x < str[i].length; x++) {
      if('aeiou'.includes(str[i][x])) {
        global = Math.max(curr, global);
        curr = 0;
      } else {
        curr++;
      }
    }
    if(global == 1) global = 0;
    global = Math.max(curr, global);
    consList.push([str[i], global]);
  }
  consList.sort((a,b) => {
    if(b[1] === a[1]) {
      return a[2] - b[2];
    } else {
      return b[1] - a[1];
    }
  });

  let result = consList.map(item => item[0]);
  return result;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

// Notable Array methods
// Array.Prototype.every
// .find
// .some
// findIndex -> Same as find except returns index, -1 instead of undefined
// .reverse mutates array inplace, use slice to shallow copy 
// .includes 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

obj = {};

flintstones.forEach((el, idx) => obj[el] = idx);
console.log(obj);

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let sum = 0;
Object.values(ages).forEach(x => sum += x);
console.log(sum);

let statement = "The Flintstones Rock";
let freq = {};
statement.split('').filter(char => char !== ' ').forEach(x => {
  if (Object.keys(freq).includes(x)) freq[x]++;
  else freq[x] = 1;
});
console.log(freq);