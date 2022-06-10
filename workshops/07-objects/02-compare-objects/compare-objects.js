// YOUR CODE BELOW

function compareObjects(obj1, obj2) {
  let keyObj1 = Object.keys(obj1);
  // console.log(keyObj1)

  let keyObj2 = Object.keys(obj2);

  let keyValue1 = Object.values(obj1);
  let keyValue2 = Object.values(obj2);

  if (keyObj1 === keyObj2 && keyValue1 === keyValue2) {
    return true;
  } else return false;
}
