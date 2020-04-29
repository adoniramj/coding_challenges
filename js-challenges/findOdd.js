function findOdd(A) {
    let obj = {}
    A.forEach(element => {
        if(obj.hasOwnProperty(element)) {
            obj[element] = obj[element] + 1
        } else {
            obj[element] = 1
        }
    })
    for (const property in obj){
        if(obj[property] % 2 > 0){
            return parseInt(property)
        }
    }

}


const testData = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

console.log(typeof findOdd(testData))