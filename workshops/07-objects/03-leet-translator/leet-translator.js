let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
let result = {};
letters.forEach((key, i) => (result[key] = leetChars[i]));

console.log(result);

function leetTranslator(string1) {
  let string = string1.toLowerCase();
  let newString = "";

  for (let i = 0; i < string1.length; i++) {
    if (string[i] in result) {
      newString += result[string[i]];
    }
    // console.log(newString)
  }
  return newString;
}
