/* 
if minorWorks is null => capitalize the first only the first letter of each word.
*/


function titleCase (title, minorWorks){
    const args = arguments.length
    if (!title) {
         return ''
    }
    let firstArg = title.split(" ").map(item => item.toLowerCase()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
    if (args == 1 || !minorWorks) {
       return firstArg.join(" ")
    }
    if(minorWorks){
       var secondArg = minorWorks.split(' ').map(item => item.toLowerCase()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
    }
    
    for (let i = 0; i < secondArg.length; i++) {
        for (let j = 1; j < firstArg.length; j++) {
            if (firstArg[j] == secondArg[i]) {
                firstArg[j] = firstArg[j].toLowerCase()
            } 
        }
    }
    return firstArg.join(" ")
}
