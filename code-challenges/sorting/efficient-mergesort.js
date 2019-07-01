'use strict';

//Improve the performance of our merge sort implementation. Document your process

const _merge = (leftSide, rightSide) => {
  let result = [];
  while(leftSide.length > 0 && rightSide > 0){
    result.push(leftSide[0] < rightSide[0] ? leftSide.shift() : rightSide.shift());
  }
  return result.concat(leftSide.length ? leftSide : rightSide);
};

const mergeSort = array => {
  if(array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let leftSide = array.slice(0,mid);
  let rightSide = array.slice(mid);

  return _merge(mergeSort(leftSide), mergeSort(rightSide));
};


console.log(mergeSort([1]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([2,1,3,6,4,9,8,7,6]));

