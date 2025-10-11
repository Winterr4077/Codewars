function abbrevName(name){
  let string = name.split(" ")
  
  return string[0][0].toUpperCase() + "." + string[1][0].toUpperCase()
}
