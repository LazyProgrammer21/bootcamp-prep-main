// YOUR CODE BELOW

let string = "";
function howEqual(arg1, arg2) {
  if (arg1 === arg2) {
    string = "strictly";
  } else if (arg1 == arg2) {
    string = "loosely";
  } else {
    string = "not equal";
  }
  return string;
}
