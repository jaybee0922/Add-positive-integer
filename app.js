const numbers = [2, -30, 50, 20, -12, -9, 7];
// First solution
const positiveSum = numbers.reduce((sum, number) => {
  if (number > 0) {
    return sum + number;
  } else {
    return sum;
  }
}, 0);

console.log(positiveSum);

//Second solution
const newNumbers = [2, -30, 50, 20, -12, -9, 7];
let newPositiveSum = 0;
newNumbers.forEach((newNumber) => {
  if (newNumber > 0) {
    newPositiveSum += newNumber;
  }
});

console.log(newPositiveSum);
