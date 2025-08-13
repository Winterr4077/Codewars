function nbYear(p0, percent, aug, p) {
  let converted = percent / 100;
  let years = 0;
  
  while (p0 < p){
    p0 = p0 + (p0 * converted) + aug
    p0 = Math.floor(p0);
    years++;
  }
  return years;
}
