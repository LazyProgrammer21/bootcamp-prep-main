// YOUR CODE BELOW

function evenAndOdd(arr) {
  let arrOdd = [];
  let arrEven = [];
  let eo = [];
  arr.forEach((item) => {
    if (item % 2 == 0) {
      arrEven.push(item);
    } else {
      arrOdd.push(item);
    }
  });
  eo.push(arrEven);
  eo.push(arrOdd);

  return eo;
}
