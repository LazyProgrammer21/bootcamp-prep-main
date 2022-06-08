// YOUR CODE BELOW

function myReverse(arr) {
  let newArray = [];
  for (let i = arr.length; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}
console.log(myReverse([1, 2, 3]));
