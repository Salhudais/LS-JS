const greetings = (arr, obj)=> {
  return `Hello, ${arr.join(' ')}! Nice to have a ${
    obj.title} ${obj.occupation} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

function penultimate(str) {
  if (str.split(" ").length < 2) return "INVALID";
  if ((str.split(" ")[this.length - 2]).length < 1) return "EMPTY WORD";
  return str.split(" ")[str.length - 2];
}

console.log("Hello my friend ".split(" ")[this.length - 1]);
