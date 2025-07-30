function makeNegative(num) {
  if (num <= 0){
    return num;
  } else {
    return num * -1;
  }
}

console.log(makeNegative(-8))
console.log(makeNegative(0))
console.log(makeNegative(4))
