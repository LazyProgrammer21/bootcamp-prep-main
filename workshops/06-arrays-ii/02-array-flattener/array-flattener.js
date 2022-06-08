// YOUR CODE BELOW
function arrayFlattener(arr) {
  let fa = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        fa.push(arr[i][j]);
      }
    } else fa.push(arr[i]);
  }
  return fa;
}
