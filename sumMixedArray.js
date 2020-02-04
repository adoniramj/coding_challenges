/*
Given an array of numbers and/or numerical strings return the total sum of all elements

Thinking process:
Converting strings to numbers => use parseInt
What happens if I apply parseInt to an integer => nothing
   => use the map method to convert the initial array to an array of only integers
Once the array contains only integers => loop to add them
*/

let numbers = [1, '2', 4, '5', '6']
function sumMix(x) {
  let total = 0
  for (let i = 0; i < x.length; i++) {
    total += parseInt(x[i])
  }
  return total;
}

console.log(sumMix(numbers))