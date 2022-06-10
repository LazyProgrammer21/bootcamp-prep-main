// YOUR CODE BELOW

function lastFridayNight(arr) {
  let totalAmount = 0;

  for (let key in arr) {
    totalAmount += arr[key].amount;
  }

  return totalAmount;
}
