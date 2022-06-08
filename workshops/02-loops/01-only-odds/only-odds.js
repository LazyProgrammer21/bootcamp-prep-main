// YOUR CODE BELOW
function onlyOdds(number) {
  let sum = 0;
  if (number < 1) return 0;

  for (var i = number; i >= 1; i--) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
}

console.log(onlyOdds(6));
