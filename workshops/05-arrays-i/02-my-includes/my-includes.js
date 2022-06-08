// YOUR CODE BELOW
function myIncludes(array1, searchValue) {
  // let boolean1;
  // debugger
  let counter = 0;
  array1.forEach((item) => {
    // console.log(item)
    // console.log(searchValue)
    if (searchValue === item) {
      counter++;
    }
  });

  if (counter === 1) {
    return true;
  } else return false;
}
