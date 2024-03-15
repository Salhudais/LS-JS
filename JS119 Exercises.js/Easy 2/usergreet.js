const readline = require('readline-sync');
let name = readline.question("What is your name? ");
if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else console.log(`Hello ${name}.`);