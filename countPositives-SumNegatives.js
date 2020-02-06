/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.



*/

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  if(input === null) {
    return []
  }
  input.forEach(element => {
    if(element > 0) {
      count++
    } else {
      sum += element
    }
  });

  return (count && sum) ? [count,sum] : []
}