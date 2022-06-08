let counter = 0;

function incrementalChange(num) {
  return (counter += num);
}

incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1);

// YOUR CODE BELOW
