'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num) 
)

let plus      = (r) => (l) => l + r
let minus     = (r) => (l) => l - r
let times     = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r