function count (string) {
    let i = string.length
    let result = {}
    while(i--){
        if(result.hasOwnProperty(string.charAt(i))){
            result[string.charAt(i)] = result[string.charAt(i)] + 1
        } else {
            result[string.charAt(i)] = 1
        }
    }

    return result
}


str = 'hello'

console.log(count(str))