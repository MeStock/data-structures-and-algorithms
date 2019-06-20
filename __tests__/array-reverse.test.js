'use strict';

const arrayReverse1 = require('../code-challenges/array-reverse/array-reverse.js').reverseArray;
const arrayReverse2 = require('../code-challenges/array-reverse/array-reverse.js').stretchGoal;
const arrayReverse3 = require('../code-challenges/array-reverse/more-array-reverse.js');
const reversedTest = ['d', 'c', 'b', 'a'];


describe('Array Reverse', () => {
  it('should reverse an array with one element', () => {
    const test = ['a'];
    expect(arrayReverse1(test)).toEqual(['a']);
    expect(arrayReverse2(test)).toEqual(['a']);
    expect(arrayReverse3(test)).toEqual(['a']);
  });

  it('should reverse any array of any size', () => {
    const test1 = ['a', 'b', 'c', 'd'];
    const test2 = ['a', 'b', 'c', 'd'];
    const test3 = ['a', 'b', 'c', 'd'];
    expect(arrayReverse1(test1)).toEqual(reversedTest);
    expect(arrayReverse2(test2)).toEqual(reversedTest);
    expect(arrayReverse3(test3)).toEqual(reversedTest);
  });

  it('should return null if no array is given', () => {
    expect(arrayReverse1()).toBeNull();
    expect(arrayReverse2()).toBeNull();
    expect(arrayReverse3()).toBeNull();
  });
});
