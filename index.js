// mindGame calculation

function mindGame(positiveNumber) {
  let multiplication = positiveNumber * 3;
  let add = multiplication + 10;
  let division = add / 2;
  let sub = division - 5;
  return sub;
}

let totalCalculation = Math.abs(mindGame(-33));
console.log(totalCalculation);

// even or odd finder

function evenOdd(string) {
  for (let i = 0; i < string.length; i++) {
    let odd = string.length;
    if (odd % 2 == 1) {
      return "odd";
    } else {
      return "even";
    }
  }
}

const details = evenOdd("I am Rubaiyat");
console.log(details);

// isLGSeven calculation

function isLGSeven(number) {
  let substraction = number - 7;
  if (substraction <= 7) {
    return substraction;
  } else if (substraction > 7) {
    let total = number * 2;
    return total;
  }
}

const wishingNumber = isLGSeven(15);
console.log(wishingNumber);

// Finding Bad Data

function findingBadData(numbers) {
  const negativeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < 0) {
      negativeNumbers.push(element);
    }
  }
  return negativeNumbers.length;
}

const age = [20, 25, 30, -2];
const negative = findingBadData(age);
console.log(negative);

// Gems To Diamond Calculation

function gemsToDiamond(friend1, friend2, friend3) {
  const diamond1 = friend1 * 21;
  const diamond2 = friend2 * 32;
  const diamond3 = friend3 * 43;
  const grandTotal = diamond1 + diamond2 + diamond3;
  if (grandTotal < 1000) {
    return grandTotal;
  } else if (grandTotal > 2000) {
    const subs = grandTotal - 2000;
    return subs;
  }
}

const friendsGems = gemsToDiamond(100, 5, 1);
console.log(friendsGems);
