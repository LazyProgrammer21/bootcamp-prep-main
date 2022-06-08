// YOUR CODE BELOW
string = "";

function isTruthy(arg) {
  if (arg === undefined) {
    string = "undefined is falsey";
  } else if (arg === null) {
    string = "The null value is falsey";
  } else if (arg === 0) {
    string = "The number 0 is falsey (the only falsey number)";
  } else if (arg === "") {
    string = "The empty string is falsey (the only falsey string)";
  } else if (arg === false) {
    string = "The boolean value false is falsey";
  } else {
    return true;
  }
  return string;
}
