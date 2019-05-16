import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

/*
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

Ex:
I: [4,8,15,16,23,42], 15	O: 2
I: [11,22,33,44,55,66,77], 90	O: -1

*/

function binarySearch(arr, key){
  let middle = Math.ceil(arr.length/2);
  let tempMiddle;
  let valueChecked = arr[middle];
  while(key !== valueChecked){
    if(tempMiddle === middle || middle > arr.length) {return -1;}

    if(key < valueChecked) {
      tempMiddle = middle;
      middle = Math.floor(middle / 2);

      valueChecked = arr[middle];
    }
    if(key > valueChecked){
      tempMiddle = middle;

      middle = middle + Math.floor(middle / 2);
      valueChecked = arr[middle];
    }
  }
  if(key === valueChecked) {return middle;}
}

binarySearch([1,4,8,15,16,23,42], 43);

describe('binary search on sorted arrays', () => {
  test('should match a key with a value and return that index', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });
});
