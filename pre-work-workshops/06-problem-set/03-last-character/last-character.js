// YOUR CODE BELOW
function lastCharacter(String1, String2) {
  if (
    String1.charAt(String1.length - 1) === String2.charAt(String2.length - 1)
  ) {
    return true;
  } else {
    return false;
  }
}
