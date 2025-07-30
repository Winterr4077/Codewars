function removeExclamationMarks(s) {
  let outcome = s.replaceAll("!", "")
  return outcome;
}

console.log(removeExclamationMarks("Hello World!"))
