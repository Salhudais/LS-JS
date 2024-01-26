let obj1 = {a: 'f00'};
let obj2 = {b: 'bar'};
Object.assign(obj1, obj2);
console.log(obj1);

let copyOfObj = Object.assign({}, obj1);
console.log(copyOfObj);

// Shallow copies will still mutate nested elements

// Deep Copy
let arr = [{b:'foo'}, ['bar']];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);
deepCopiedArr[1].push('baz');
console.log(deepCopiedArr);
console.log(arr);

// We can also freeze the objects
// Altering data will not raise an error
// however trying to use a method to mutate will

obj1 = Object.freeze({a: 'foo'});
console.log(Object.isFrozen(obj1));


arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(x => {
  return Object.values(x).every(sub => {
    return sub.every(num => num % 2 === 0);
  });
});
console.log(newArr);

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let newobj = {};
arr.forEach(x => {
  newobj[x[0]] = x[1];
});
console.log(newobj);

let newMunsters = JSON.parse((JSON.stringify(munsters)));
console.log(newMunsters);
munsters.herman.age = 18;
console.log(newMunsters);
console.log(munsters);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);