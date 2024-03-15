const utf16Value = x => {
  return x.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
};

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));             // 97
console.log(utf16Value(''));                  // 0
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811