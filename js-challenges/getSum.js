function getSum(a,b) {
     if (a == b) {
        return a
     }
    const min = Math.min(a,b)
    const max = Math.max(a,b)
    count = 0
    for(let i = min; i <= max; i++){
        count += i
    }
    return count
}


