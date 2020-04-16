/*
Write a function that returns the total cost for a car rental

cost per day 40

discount
  less than 3 days => no discount
  3<= d < 7 => 20 off
  d >= 7 50 off
*/

function rentalCarCost(d) {
  const dailyCost = 40
  let totalCost = 0
  if (d < 3) {
    return totalCost = d * dailyCost
  } else if (d >= 3 && d < 7) {
    return totalCost = d * dailyCost - 20
  } else {
    return totalCost = d * dailyCost - 50
  }
}

console.log(rentalCarCost(7))