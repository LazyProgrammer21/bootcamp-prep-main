// YOUR CODE BELOW
// let mnemonic = "";
// function myMnemonic() {
//   console.log(arguments);
//   for (var i = 0; i < arguments.length; i++) {
//     mnemonic += arguments[i][0];
//     // arguments[0];
//   }
//   return mnemonic;
// }
// // console.log(myMnemonic("subash", "hari", "ram"));

let mnemonic = "";
function myMnemonic(a, b, c, d) {
  if (a !== undefined) {
    mnemonic += a[0];
  }
  if (b !== undefined) {
    mnemonic += b[0];
  }

  if (c !== undefined) {
    mnemonic += c[0];
  }
  if (d !== undefined) {
    mnemonic += d[0];
  }
  // return mnemonic;

  return mnemonic.trim().toUpperCase();
}

console.log(myMnemonic("steak", "umbrella"));
