export function fizzBuzz(n: number) {
  for (let counter = 1; counter <= n; counter++) {
    if (isMultipleOfFive(counter) && isMultipleOfThree(counter)) {
      console.log("fizzbuzz");
      continue;
    }
    if (isMultipleOfFive(counter)) {
      console.log("buzz");
      continue;
    }
    if (isMultipleOfThree(counter)) {
      console.log("fizz");
      continue;
    }
    console.log(counter);
  }
}

function isMultipleOfThree(num: number) {
  return num % 3 === 0;
}
function isMultipleOfFive(num: number) {
  return num % 5 === 0;
}
