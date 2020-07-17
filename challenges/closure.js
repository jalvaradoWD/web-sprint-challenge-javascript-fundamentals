// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: Since the nestedFunction is in myFunction, nestedFunction can access all of the variables in the global scoped and all of the variables within myFunction.
// If nestedFunction were to be outside of the myFunction scope, then it can no longer access the variables within myFunction.Thus give the nestedFunction a reference error since it there is no instance of the "internal" variable in the current scope in nestedFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = (num) => {
  let counter = 0;
  for (let i = 0; i < num; i++) {
    counter += i + 1;
  }
  return counter;
};

console.log(summation(4));
