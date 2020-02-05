/* 

Thinking process
1. Split the string into an array using WUB as split
2. After the split recreate the string using .join(' ')
*/
function songDecoder(song){
  let array = song.split('WUB')
  let newArray = []

  for(let i = 0; i < array.length; i++){
    if(array[i]) {
      newArray.push(array[i])
    }
  }
  
  let newSong = newArray.join(' ')
  return newSong
}
