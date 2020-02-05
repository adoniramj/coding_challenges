/* 
Write a function that takes a collection and counts the points for team A.
The score of team a is always first.

Thinks process:
The function argument is an array. The array is composed of strings with the following format '#:#' where # is the score.

1. Loop through the array and print each string. This step will not be part of the final answer.
2. Once we can loop through each item we need to compare the numbers of each array element.
2.1 Write a function that takes each element and prints each element.
3. We can retrieve characters from a string the same way we can retrieve elements from an array using [].
3.1 Next convert the character to integer use parseInt
4. Do the score comparison and return points
5. Create final function
*/

function stringToNumber(stringInp) {
  let x = parseInt(stringInp[0])
  let y = parseInt(stringInp[2])

  function scoreComparison(x, y) {
    if (x > y) {
      return 3
    } else if (x === y) {
      return 1
    } else {
      return 0
    }
  }
  return scoreComparison(x, y)
}

function points(games) {
  let totalPoints = 0
  games.forEach(score => {
    totalPoints += stringToNumber(score)
  })
  return totalPoints
}