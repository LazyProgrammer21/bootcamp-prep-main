// YOUR CODE BELOW
function greeting(name) {
  if (name === undefined) {
    return "Hello!";
  } else {
    return "Hello " + name + "!";
  }
}
console.log(greeting());
console.log(greeting("subash"));
