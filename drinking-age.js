// Checks the given age to see whether it's legal to drink in the US or not.
// Returns true if the age is 21 years or older. Otherwise, returns false.
function checkDrinkingAge(age) {
  // TODO: Implement this function.
   age >= 21 ? 'true' : 'false';   //if age is greater than or = 21, return true
   
//return age, is age less > or = 21 ? return true else, false
      return `${age} ${age >= 21 ? true : false}`; 
}


//check console
console.log(checkDrinkingAge(17)); // false
console.log(checkDrinkingAge(22)); // true



// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkDrinkingAge
};
