'use strict';

// Improve our quicksort implementation to use "three-way partition". Document your process

const _swap = (items, indexA, indexB) => {
  const helper = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = helper;
};

const _partition = (items, leftIndex, rightIndex) => {
  const pivotIndex = rightIndex;
  let firstEqual = rightIndex; //set the first equal to the pivot to start
  let lastEqual = rightIndex; //set the last equal to the pivot to start
  let firstHighIndex = leftIndex;

  for(let i = leftIndex; i < rightIndex; i ++){
    if(items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
    if(items[i] === items[pivotIndex]){
      _swap(items, i, firstEqual - 1); //move duplicate values next to the pivot
      firstEqual = firstEqual - 1; //set the first equal to the duplicate
      if(items[i] < items[pivotIndex]) {
        _swap(items, i, firstHighIndex); //do the same firstHigh check now that the duplicate is removed
        firstHighIndex++;
      }
    }
  }
  _swap(items, pivotIndex, firstHighIndex);
  return [firstEqual, lastEqual]; //return the range where all the duplicates exist (next to the pivot)
};

const _helper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    const partitionIndex = _partition(items, leftIndex, rightIndex);

    //when we get here - we use recursion but remove the entire section of duplicate values
    _helper(items,leftIndex, partitionIndex[0] -1);
    _helper(items, partitionIndex[1] + 1, rightIndex);
  }
};

const quicksort = items => {
  return _helper(items, 0, items.length -1);
};


let array = [4,5,3,1];
quicksort(array);
console.log(array);

array = [1, 2];
quicksort(array);
console.log(array);

array = [2, 1,3,6,4,9,8,7,6];
quicksort(array);
console.log(array);

array = [2,1,3,6,4,9,8,7,6,3,6,9,2,6,0,4,2,6,3,7];
quicksort(array);
console.log(array);
