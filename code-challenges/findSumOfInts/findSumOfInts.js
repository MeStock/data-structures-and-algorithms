'use strict';

/*
Problem Domain: Given an array of integers and a value, find a pair of integers in the array that add to that value.

*/

function findSumOfInts(array, key){
  if(!array || !key) return null;
  if(typeof key !== 'number' || typeof array !== 'object') return null;
  if(array.length < 2) return null;
  const hashMap = new Map();
  for(let i = 0; i < array.length; i++){
    hashMap.set(array[i]);
  }
  for(let j = 0; j < array.length; j++){
    let difference = key - array[j];
    if(hashMap.has(difference)){
      return [array[j], difference];
    }
  }
}

module.exports = findSumOfInts;
