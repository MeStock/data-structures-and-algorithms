'use strict';

// Improve our quicksort implementation to use "three-way partition". Document your process

const _swap = (array, indexA, indexB) => {
  const helper = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = helper;
};

const _sort3way = (array, leftSide, rightSide) => {
  if (leftSide < rightSide) {
    let lastLowIndex = leftSide;
    let firstHighIndex = rightSide;
    const pivotIndex = array[leftSide];

    let i = leftSide;

    while (i <= firstHighIndex) {
      if (array[i] < pivotIndex) {
        _swap(array, i, lastLowIndex);
        i++;
        lastLowIndex++;
      } else if (array[i] > pivotIndex) {
        _swap(array, i, firstHighIndex);
        firstHighIndex--;
      } else {
        i++;
      }
    }

    _sort3way(array, leftSide, lastLowIndex - 1);
    _sort3way(array, firstHighIndex + 1, rightSide);
  }
};

const quicksort = (array) => {
  _sort3way(array, 0, array.length - 1);
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

array = [2,1,3,6,4,9,8,7,6,3,6,9,2,6,0,4,2,6,3,7];
quicksort(array);
console.log(array);
