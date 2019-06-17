'use strict';

function reverseAnArray(array){
  if(!array) return null;
  if(array.length === 1) return array;
  const middleOfArray = Math.floor(array.length / 2);
  for(let i = 0; i < middleOfArray; i++){
    let front = array[i];
    let back = array[(array.length - 1) - i];

    array[(array.length - 1) - i] = front;
    array[i] = back;
  }
  return array;
}

module.exports = reverseAnArray;
