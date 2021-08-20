const bigNumbers = [86, 67, 3, 78, 13, 47, 875, 23, 34, 1, 8, 987, 235, 95, 24, 60, 76];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});

console.log('sort numbers = ', sortedBigNumbers);
