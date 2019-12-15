/*
INSTRUCTIONS
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Thinking process
The input is a number.
Do a while loop => exit conditon i less n
1. Create if statement that test that i is divisible by 3 or 5. Console.log i if % = 0
2. Create a variable that returns the sum of all numbers thats passed the condition.
3. Test with number = 10; outputs should be 23

Refactoring thinking 
*/

function solution(number) {
  let i = 0
  let sum = 0
  while (i < number) {
    if (!(i % 3) || !(i % 5)) {
      sum += i
    }
    i++
  }
  return sum
} 

solution(10)