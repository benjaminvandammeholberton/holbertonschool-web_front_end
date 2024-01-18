function countPrimeNumbers() {
  let array = [];
  for (let i = 2; i <= 100; i++) {
    let flag = false;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      array.push(i);
    }
  }
  return array.length;
}
const startTime = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const endTime = performance.now();
console.log(
  'Execution time of calculating prime numbers 100 times was ' +
    (endTime - startTime) +
    ' milliseconds'
);
