'use strict';

const _findPartition = array => {
  let mid = Math.floor(array.length / 2);
  for(let j = 0; j < array.length; j++){
    if(array[mid] === 1){
      if(array[mid - 1] === 0 || array[mid + 1] === 0){
        return mid;
      }
      mid = Math.floor(mid / 2);
    }
    if(array[mid - 1] === 1 || array[mid + 1] === 1){
      return mid;
    }
    mid = mid + Math.floor(mid / 2);
    if(mid >= array.length) return 0;
  }
};

const findMaxAndMinZeros = (array) => {
  if(!array) return null;
  if(array.length < 1) return null;
  const result = {
    max: 0,
    maxIdx: 0,
    min: 0,
    minIdx: 0,
  };
  for(let i = 0; i < array.length; i++){
    if(_findPartition(array[i]) > result.maxIdx){
      result.maxIdx = _findPartition(array[i]);
      result.max = i;
    }
    if(_findPartition(array[i]) <= result.minIdx){
      result.minIdx = _findPartition(array[i]);
      result.min = i;
    }
  }
  return result;
};

module.exports = findMaxAndMinZeros;
