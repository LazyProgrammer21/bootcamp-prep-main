// YOUR CODE BELOW

let newString = "";
function crazyCaps(String1) {
  newString = String1.charAt(0).toLowerCase();
  for (var i = 0; i < String1.length; i++) {
    newString += String1.charAt(i + 1).toUppercase();
  }
}
