// YOUR CODE BELOW

let counter = 0,
  result = 1;
function bacteriaTime(currentNum, targetNum) {
  if (targetNum < currentNum) {
    return "please input valid";
  }

  for (var i = 0; true; i++) {
    result = result * 2 * currentNum;
    currentNum = 1;
    counter++;

    if (result > targetNum) {
      break;
    }
  }
  return counter * 20;
}
