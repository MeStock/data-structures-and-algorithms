/*
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
*/

function insertShiftArray(arr, item){
  if(typeof item === 'undefined') return;
  if(typeof arr !== 'object') return;
  if(arr.length === 0) return [item];
  let middleidx = Math.ceil(arr.length/2);
  for(let i = arr.length; i > middleidx; i--){
    arr[i] = arr[i-1];
  }
  arr[middleidx] = item;
  return arr;
}

describe('insertShiftArray', () => {
  test('should add an item to the middle of a list', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });

  test('should throw an error if there are bad arguments', () => {
    expect(insertShiftArray()).toBeFalsy();
    expect(insertShiftArray('not an array', 15)).toBeFalsy();
    expect(insertShiftArray(['No', 'item', 'defined'])).toBeFalsy();
  });

  test('should return an array with one item if an empty array is passed', () => {
    expect(insertShiftArray([],'just one item here')).toStrictEqual(['just one item here']);
  });

});
