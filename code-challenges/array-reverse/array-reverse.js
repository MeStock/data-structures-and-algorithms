// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

function reverseArray(arr){
  if(!arr) return null;
  if(arr.length === 1) return arr;
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result;
}


// STRETCH GOAL
// Once you’ve achieved a working solution, implement the same feature with a different methodology. (Hint: what different techniques do you have when working with arrays? Recursion, loops, indexes, modifying the array input directly…)

function stretchGoal(arr){
  if(!arr) return null;
  if(arr.length === 1) return arr;
  let result = [];
  let length = arr.length;
  for(let i = 0; i < length; i++){
    let lastElement = arr.pop();
    result.push(lastElement);
  }
  return result;
}

module.exports = {reverseArray, stretchGoal};

