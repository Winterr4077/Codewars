const areaOrPerimeter = function(l , w) {
  if (l === w){
    return l * w;
  } else if (l !== w){
    return 2 * (l + w);
  } else {
    return "An error occured."
  }
};

console.log(areaOrPerimeter(4,4))
console.log(areaOrPerimeter(4,8))
