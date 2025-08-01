function findAverage(array) {
  let sum = 0;
  
  if (!array.length){
    return 0;
  } else {
      for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
  }
  sum = sum / array.length;
  return sum;
}
