function switchItUp(number){
  if (number === 0){
    return "Zero"
  } else if (number === 1){
    return "One"
  } else if (number === 2){
    return "Two"
  } else if (number === 3){
    return "Three"
  } else if (number === 4){
    return "Four"
  } else if (number === 5){
    return "Five"
  } else if (number === 6){
    return "Six"
  } else if (number === 7){
    return "Seven"
  } else if (number === 8){
    return "Eight"
  } else if (number === 9){
    return "Nine"
  } else {
    return "Error: Not a valid number between 0-9."
  }
}

console.log(switchItUp(10))
console.log(switchItUp(5))
