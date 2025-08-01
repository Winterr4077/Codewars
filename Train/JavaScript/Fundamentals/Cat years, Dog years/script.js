function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    let extraYears = humanYears - 2;
    catYears += extraYears * 4;
    dogYears += extraYears * 5;
  }
  return [humanYears, catYears, dogYears];
}
