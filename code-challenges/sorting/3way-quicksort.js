'use strict';

// Improve our quicksort implementation to use "three-way partition". Document your process

const _swap = (items, indexA, indexB) => {
  const helper = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = helper;
};

const _partition = (items, leftIndex, rightIndex) => {
  const pivotIndex = rightIndex;
  let firstEqual = rightIndex;
  let lastEqual = rightIndex;
  let firstHighIndex = leftIndex;

  for(let i = leftIndex; i < rightIndex; i ++){
    if(items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
    if(items[i] === items[pivotIndex]){
      _swap(items, i, firstEqual - 1);
      firstEqual = firstEqual - 1;
      if(items[i] < items[pivotIndex]) {
        _swap(items, i, firstHighIndex);
        firstHighIndex++;
      }
    }
  }
  _swap(items, pivotIndex, firstHighIndex);
  return [firstEqual, lastEqual];
};

const _helper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    const partitionIndex = _partition(items, leftIndex, rightIndex);

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
