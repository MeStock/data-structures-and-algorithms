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

// export default quicksort;

// const _swap = (items, indexA, indexB) => {
//   const helper = items[indexA];

//   items[indexA] = items[indexB];
//   items[indexB] = helper;
// };

// const _partition = (items, leftIndex, rightIndex) => {
//   const pivotIndexIndex = rightIndex;
//   let firstEqual = rightIndex; //set the first equal to the pivot to start
//   let lastEqual = rightIndex; //set the last equal to the pivot to start
//   let firstHighIndex = leftIndex;

//   for(let i = leftIndex; i < rightIndex; i ++){
//     if(items[i] < items[pivotIndex]) {
//       _swap(items, i, firstHighIndex);
//       firstHighIndex++;
//     }
//     if(items[i] === items[pivotIndex]){
//       _swap(items, i, firstEqual - 1); //move duplicate values next to the pivot
//       firstEqual = firstEqual - 1; //set the first equal to the duplicate
//       if(items[i] < items[pivotIndex]) {
//         _swap(items, i, firstHighIndex); //do the same firstHighIndex check now that the duplicate is removed
//         firstHighIndex++;
//       }
//     }
//   }
//   _swap(items, pivotIndex, firstHighIndex);
//   return [firstEqual, lastEqual]; //return the range where all the duplicates exist (next to the pivot)
// };

// const _helper = (items, leftIndex, rightIndex) => {
//   if (rightIndex > leftIndex) {
//     const partitionIndex = _partition(items, leftIndex, rightIndex);

//     //when we get here - we use recursion but remove the entire section of duplicate values
//     _helper(items,leftIndex, partitionIndex[0] - 1);
//     _helper(items, partitionIndex[1] + 1, rightIndex);
//   }
// };

// const quicksort = items => {
//   return _helper(items, 0, items.length -1);
// };


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
