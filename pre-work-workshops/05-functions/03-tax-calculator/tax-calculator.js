// YOUR CODE BELOW
let taxCalculatorfinal = 0;

function taxCalculator(itemPrice, state) {
  if (state === "NY") {
    taxCalculatorfinal = (itemPrice * 4) / 100 + itemPrice;
  } else if (state === "NJ") {
    taxCalculatorfinal = (itemPrice * 6.625) / 100 + itemPrice;
  }
  return taxCalculatorfinal;
}

// console.log(taxCalculator(100, "NY"));
