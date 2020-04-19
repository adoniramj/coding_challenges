//HARD CHALLENGE

function zero() {
  if (arguments.length === 1) { // if length is one it is the outer most function
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  } else {
    return number(arguments.callee.name)
  }
}
function one() {
  if (arguments.length === 1) { // if length is one it is the outer most function
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  } else {
    return number(arguments.callee.name)
  }
}

function two() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function three() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function four() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function five() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function six() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function seven() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function eight() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}
function nine() {
  if (arguments.length === 0) { // if the length is zero it is the inner most function
    return number(arguments.callee.name)
  }
  if (arguments.length === 1) {
    const left = number(arguments.callee.name)
    const right = arguments['0'].right
    const operator = arguments['0'].operation
    return calculation(operator, left, right)   
  }
}

function plus() {
  return obj = {
   'operation' : arguments.callee.name,
   'right' : arguments['0']
 }
}
function minus() {
  return obj = {
    'operation' : arguments.callee.name,
    'right' : arguments['0']
  }
}
function times() {
  return obj = {
    'operation' : arguments.callee.name,
    'right' : arguments['0']
  }
}
function dividedBy() {
  return obj = {
    'operation' : arguments.callee.name,
    'right' : arguments['0']
  }
}

function number (funcName) {
  obj = {
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }
  return obj[funcName]
}

function calculation(operator, left, right) {
  switch (operator) {
    case 'minus':
      return left - right
    case 'times':
      return left * right
    case 'dividedBy':
      return right !== 0 ? Math.floor(left / right) : undefined
    default:
      return left + right
  }
}

console.log(six(dividedBy(two())))