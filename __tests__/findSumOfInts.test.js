'use strict';

const findSumOfInts = require('../code-challenges/findSumOfInts/findSumOfInts.js');

describe('find sum of integers', () => {
  it('should find 2 numbers inside an array that add up to the key', () => {
    const test = [1,4,8,3,7,2,0,-1];
    expect(findSumOfInts(test, 11)).toEqual([4,7]);
  });

  it('should return null if inputs are not valid', () => {
    expect(findSumOfInts()).toBeNull();
    expect(findSumOfInts(1,2)).toBeNull();
    expect(findSumOfInts([1,2,3], 'not a number')).toBeNull();
    expect(findSumOfInts([], 4)).toBeNull();
  });

  it('should find the first pair that add up to the key', () => {
    const test = [1,2,4,-1];
    expect(findSumOfInts(test, 3)).toEqual([1,2]);
  });
});
