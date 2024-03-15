function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str1 + str2;
  } else {
    return str2 + str1;
  }
}
const shortlongshort2 = (x,y) => {
  return x.length < y.length ? x.concat(y) : y.concat(x);
}