debugger;
let newString = "";
function zeroDarkThirty(num) {
  let string1 = String(num);
  if (num === 0) {
    return NaN;
  }
  for (var i = 0; i < string1.length; i++) {
    if (string1[i] !== "0") {
      newString += string1[i];
    }

    return Number(newString);
  }
}
console.log(zeroDarkThirty(10000000));
