function meanMedian(arrayInput) {
  const length = arrayInput.length;
  const middle = Math.floor(length / 2);

  const sum = arrayInput.reduce((acc, val) => acc + val, 0);
  const mean = sum / length;

  const median = length % 2 === 0 ? (arrayInput[middle - 1] + arrayInput[middle]) / 2 : arrayInput[middle];

  return { mean, median };
}

console.log(meanMedian([1, 2, 3, 4]));
console.log(meanMedian([1, 2, 3, 4, 5]));
console.log(meanMedian([7, 8, 9, 13, 15]));
console.log(meanMedian([10, 20, 30, 40, 50]));
console.log(meanMedian([15, 20, 30, 60, 120]));
console.log(meanMedian([10, 22, 30, 60, 120]));
