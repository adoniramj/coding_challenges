function descendingOrder(n){
  return parseInt(n.toString().split('').map(el => parseInt(el)).sort((a,b) => b-a).join(''))
  // arr = (n + '').split('')
  // arr = arr.map(el => parseInt(el))
  // arr.sort((a,b) => b-a)
  // return parseInt(arr.join(''))
}


const x = descendingOrder(145465343)
console.log(x)