// let message = "hello";

// function sayHello() {
//   console.log(message);
//   return sayHello();
// }

// sayHello();

// function defaultGreet(firstName, lastName) {
//   if (lastName === undefined) {
//     lastName = "Doe";
//   }
//   return "hi!" + firstName + " " + lastName;
// }
// console.log(defaultGreet("subash"));
// YOUR CODE BELOW
// let taxCalculatorfinal = 0;

// function taxCalculator(itemPrice, state) {
//   if (state === "NY") {
//     taxCalculatorfinal = (itemPrice * 4) / 100 + itemPrice;
//   } else if (state === "NJ") {
//     taxCalculatorfinal = (itemPrice * 6.625) / 100 + itemPrice;
//   }
//   return taxCalculatorfinal;
// }

// console.log(taxCalculator(100, "NY"));

let mnemonic = "";
function myMnemonic() {
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    mnemonic += arguments[i][0];
    // arguments[0];
  }
  return mnemonic;
}
console.log(myMnemonic("subash", "hari", "ram"));
