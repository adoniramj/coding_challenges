/* 
You have string with any type of characters.
Return a new string where each character is duplicates
mayBe => mmaayyBBee

Thinking process
1. convert the string to an array to loop through each character
2. loop through each element an push twice each element to the new array
3. Modify the array to string using join()
*/

let string = 'mayBe'




function doubleChar(str) {
  let arr = str.split('')
  let modArr = []
  arr.forEach(element => {
    modArr.push(element)
    modArr.push(element)
  });
  let newString = modArr.join('')
  return newString
}

doubleChar(string)