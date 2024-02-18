// Checks the given age to see whether it's legal to drink in the US or not.
// Returns true if the age is 21 years or older. Otherwise, returns false.
function checkDrinkingAge(age) {
  // TODO: Implement this function.
  const result = age >= 21 ? 'true' : 'false';
  //if age is > or = 21, return true : else return false
  return result;
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkDrinkingAge
};
