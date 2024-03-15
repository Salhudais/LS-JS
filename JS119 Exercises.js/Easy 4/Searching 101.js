const readline = require('readline-sync');
const searching101 = () => {
  let suffix = ['st','nd','rd','th','th','last'];
  let arr = [];
  for(let i = 0; i <= 5; i++) {
    let num = readline.question(`Enter the ${i < 5 ? i + 1: ""}${suffix[i]} number: `);
    arr.push(Number(num));
  }
  let bool = false;
  for(let i = 0; i < 5; i++) {
    if(arr[i] == arr[5]) {
      bool = true;
      break;
    }
  }
  let output = arr.splice(0, arr.length - 1);
  console.log(`The number ${arr[arr.length- 1]} 
    ${bool ? "appears" : "does not appear in"} 
    ${output}.`)    
}

const isalpha = y => {
  let x = y.charCodeAt(0);
  return (x >= 65 && x <= 90) || (x >= 97 && x <= 122);
}
const isRealPalindrome = x => {
  let bool = true;
  const palindrome = (y,z)=> {
    if(y >= z) return;
    if(!isalpha(x[y] || !isalpha(x[z]))) palindrome(y + 1,z - 1);
    if((x[z]).toLowerCase() !== (x[y]).toLowerCase()) {
      bool = false;
      return;
    }
    palindrome(y + 1, z - 1);
  }
  palindrome(0, x.length - 1);
  console.log(bool);
}

const isPalindromicNumber = x => {
  let y = String(x);
  for(let i = 0, z = y.length - 1; i < z; i++, z--) {
    if(y[i] !== y[z]) return false;
  }
  return true;
}

const wordSizes = x => {
  let obj = {};
  x.split(" ").forEach(z => {
    let count = 0;
    for(let i =  0; i < z.length; i++) {
      if(isalpha((z[i]))) count++;
    }
    if(count in obj) obj[count]++;
    else if(count > 0) obj[count] = 1;
  });
  console.log(obj);
}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}