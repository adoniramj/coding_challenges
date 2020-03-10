function isPrime(value) {
  if(!isPrime.answers){
    isPrime.answers = {}
  }

  if(isPrime.answers[value] !== undefined) {
    return 'Value cached'
  }

  var prime = value !== 1 //Anything other than one is true

  for (let i = 2; i < value; i++){
    if (value % i === 0){
      prime = false
      break;
    }
  }
  return isPrime.answers[value] = prime
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(5))