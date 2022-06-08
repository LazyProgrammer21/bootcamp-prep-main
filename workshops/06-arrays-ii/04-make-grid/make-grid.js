// YOUR CODE BELOW

function makeGrid(numColm, numRow) {
  let finalarray = [];

  for (let i = 1; i <= numRow; i++) {
    let newArray = [];
    for (let j = 1; j <= numColm; j++) {
      newArray.push(j);
    }
    finalarray.push(newArray);
  }
  return finalarray;
}
