// Edit the code below

let place = "Planet Earth";
function fullstackHQ() {
  return middleFunction(0);

  function middleFunction() {
    return innerFunction();

    function innerFunction() {
      return innermostFunction(place);

      function innermostFunction(place) {
        place = "Planet Earth";
        place1 = "United States";
        place2 = "New York State";
        place3 = "New York City";
        return (
          "Fullstack HQ is at " +
          place +
          ", " +
          place1 +
          ", " +
          place2 +
          ", " +
          place3
        );
      }
    }
  }
}
