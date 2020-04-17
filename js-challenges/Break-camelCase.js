// solution("camelCasing")  ==  "camel Casing"
//Create a function the breaks camel casing.

//How to check is a character is uppercase or lowercase

const stringtest = "abcABestD";

function solution(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter == letter.toUpperCase()) {
      newString += ` ${letter}`; //notice the space after the initial `
    } else {
      newString += letter;
    }
  }
  return newString;
}

function solution2(string) {
  return [...string].reduce(
    (acc, item) =>
      item === item.toUpperCase() ? (acc += ` ${item}`) : (acc += item),
    ""
  );
}

console.log(solution2(stringtest));

//other solutions used replace, map and union
