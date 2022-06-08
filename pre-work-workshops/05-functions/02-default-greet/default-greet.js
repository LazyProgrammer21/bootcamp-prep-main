// YOUR CODE BELOW

function defaultGreet(firstName, lastName) {
  if (lastName === undefined) {
    lastName = "Doe";
  }
  return "Hi " + firstName + " " + lastName + "!";
}
defaultGreet("subash");

// function defaultGreet(firstName, lastName = "Doe") {
//   return "Hi " + firstName + " " + lastName + "!";
// }
// defaultGreet("subash");

// console.log(defaultGreet("subash"));
//function ma parameter xa however we can give default value if value is not passed
