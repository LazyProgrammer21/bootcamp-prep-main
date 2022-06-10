// YOUR CODE BELOW

function frequencyAnalysis(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let curR_val = str[i];
    if (!curR_val in result) {
      result[curR_val] = 1;
    } else {
      result[curR_val]++;
    }
  }
  return result;
}
