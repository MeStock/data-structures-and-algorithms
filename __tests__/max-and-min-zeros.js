'use strict';

const findMaxAndMinZeros = require('../code-challenges/findMaxAndMinZeros/max-and-min-zeros.js');

describe('find the rows with the most and least number of zeros given a 2d array', () => {
  it('should find the max & min', () => {
    const test = [
      [0,0,0,1], //0
      [0,0,0,1], //1
      [0,0,1,1], //2
      [0,0,0,1], //3
      [0,0,0,0], //4
      [0,0,0,1], //5
    ];

    const answer = findMaxAndMinZeros(test);
    expect(answer.min).toEqual(4);
    expect(answer.maxIdx).toEqual(2);
  });

  it('should return null if there is an invalid input', () => {
    expect(findMaxAndMinZeros()).toBeNull();
  });
});
