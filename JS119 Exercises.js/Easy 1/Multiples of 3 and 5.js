const multisum = x => {
  if (x === 0) return x;

  if ((x % 3 === 0) || (x % 5 === 0)) {
    return x + multisum(x - 1);
  }
  return multisum(x - 1);
}
console.log(multisum(3));       // 3
console.log(multisum(5));  // 8
console.log(multisum(10));      // 33
multisum(1000);    // 234168