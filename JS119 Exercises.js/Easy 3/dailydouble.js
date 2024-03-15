const crunch = text => {
  let sample = "";
  for (let i = 0; i < text.length; i++) {
    if(text[i] !== text[i + 1]) sample += text[i];
  }
  console.log(sample);
};

const logInBox = text => {
  console.log('+' + ('-'.repeat(text.length + 2)) + '+');
  console.log('|' + (' '.repeat(text.length + 2)) + "|");
  console.log('| ' + text + ' |');
  console.log('|' + (' '.repeat(text.length + 2)) + "|");
  console.log('+' + ('-'.repeat(text.length + 2)) + '+');
};

const stringy = num => {
  let result = '';
  for(let i = 0; i < num; i++) {
    let sw = ((i % 2) === 0) ? 1 : 0;
    result += sw;
  }
  console.log(result);
};
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

const findfibindexbyLength = x => {
  let a = 1n, b = 1n, result = a + b, count = 3n;
  do {
    count += 1n;
    a = b;
    b = result;
    result = a + b;
  }
  while (String(result).length < x);

  console.log(count);
};

const triangle = x => {
  for (let i = 0; i <= x; i++) {
    let sample = "";
    for (let j = 0; j < x; j++) {
      if (x - i <= j) sample += "*";
      else sample += " ";
    }
    console.log(sample);
  }
};
const triangle2 = x => {
  for (let i = 0; i <= x; i++) {
    console.log(' '.repeat(x - i) + '*'.repeat(i));
  }
};

const twice = x => {
  if (String(x).slice(0, String(x).length / 2) ===
    String(x).slice(String(x).length / 2, String(x).length)) {
    console.log(x);
  } else console.log(x * 2);
};

const cleanUp = x => {
  let sample = "";
  for (let i = 0; i < x.length; i++) {
    if (!isalpha(x[i])) {
      let j = i;
      while(!isalpha(x[j]) && j < x.length) {
        j++;
      }
      i = j -1;
      sample += ' ';
    } else sample += x[i];
  }
  console.log(sample);
}

function isalpha(x) {
  return (x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z');
}
cleanUp("---what's my +*& line?");    // " what s my line "

const century = x => {
  let counter = String(Math.ceil(( x / 100)));
  switch(counter % 10) {
    case 1:
      counter += 'st';
      break;
    case 2:
      counter += 'nd';
      break;
    case 3:
      counter += 'rd';
      break;
    default:
      counter += 'th';
  }
  console.log(counter);
}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"