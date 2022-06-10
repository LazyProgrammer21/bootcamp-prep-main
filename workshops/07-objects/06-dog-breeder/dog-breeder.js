// YOUR CODE BELOW

function dogBreeder(string, number) {
  let name;
  let age;
  if (number) {
    name = string;
    age = number;
  } else if (string) {
    if (typeof string === "string") {
      name = string;
      age = 0;
    } else {
      name = "Steve";
      age = number;
    }
  } else {
    name = "Steve";
    age = 0;
  }
  return { name, age };
}
