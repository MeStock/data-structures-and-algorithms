'use strict';

/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

Ex:
I: [4,8,15,16,23,42], 15	O: 2
I: [11,22,33,44,55,66,77], 90	O: -1

*/

function binarySearch(arr, key){
  if(key === 'undefined' || (typeof arr) !== 'object' || arr.length === 0) {return 'please enter valid inputs';}
  let middle = Math.floor(arr.length/2);
  let tempMiddle;
  let valueChecked = arr[middle];
  while(key !== valueChecked){
    valueChecked = arr[middle];
    if(tempMiddle === middle || middle > arr.length) {return -1;}

    if(key < valueChecked) {
      tempMiddle = middle;
      middle = Math.floor(middle / 2);
    }

    if(key > valueChecked){
      tempMiddle = middle;
      middle = middle + Math.ceil(middle / 2);
    }
  }
  if(key === valueChecked) {return middle;}
}

console.log(binarySearch([4,8,15,16,23,42], 15));

describe('binary search on sorted arrays', () => {
  it('should match a key with a value and return that index', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
  it('should stop searching if the key was not matched', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
  });
  it('should be able to reach the first and last index of the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 4)).toEqual(0);
    expect(binarySearch([4,8,15,16,23,42], 42)).toEqual(5);
  });
});
