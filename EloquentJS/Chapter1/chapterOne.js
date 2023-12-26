console.log(`half of 100 is  ${100 / 2}`); // Template Literals
console.log(typeof 4.5);
console.log(typeof "x");

console.log(NaN == NaN); /* Nonsensical computation != itself */

console.log(null);
console.log(undefined); // Inplace of operations that must return a value

// Type coercion in action
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1); // Tries string concatenation before addition
console.log("five" * 2); // NaN, cannot convert five to anything meaningful
console.log(false == 0);

console.log(null == undefined);

console.log(null == 0);

//Automatic type conversion
console.log(0 == false);
console.log("" == false);

// Avoid type conversion using precise operators
console.log(0 === false);
console.log("" === false);

//Ternary Operators
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);