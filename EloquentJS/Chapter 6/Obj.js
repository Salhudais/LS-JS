function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbut = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
  "how late it's getting");

speak.call(hungryRabbut, "burp!");
// .call explicitly treats -this parameter.

function normalize(x) {
  console.log(this.coord.map(n => n / this.length));
}
normalize.call({coord: [0,2,3], length: 5});

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Demonstrates use of prototypes by searching for the requested
// property in the object, and searching it's prototype 
// in case the property isnt found

// Main ancestral prototype of all objects is Object.prototype

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Function.prototype)) == Object.prototype);

/*
Many objects don't directly have an Object.prototype but instead
another object with a different set of default properties, and 
one step up the tree is the Object.prototype. */

let protoRabbit = {
  // Short hand Method Definition
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabit = Object.create(protoRabbit);
killerRabit.type = "killer";
killerRabit.speak("Skreee!");
console.log(Object.getPrototypeOf(protoRabbit));

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
function rabbit(type) {
  this.type = type;
}
rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit("weird");

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let krabbit = new Rabbit("Killer");
let bRabbit = new Rabbit('Black');


