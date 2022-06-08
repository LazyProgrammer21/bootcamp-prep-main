// YOUR CODE BELOW
function oddCouple(num) {
  let newArr = [];
  num.forEach((item) => {
    if (item % 2 === 0) {
    } else {
      newArr.push(item);
    }
  });
  let newArray1 = newArr.slice(0, 2);
  return newArray1;
}
