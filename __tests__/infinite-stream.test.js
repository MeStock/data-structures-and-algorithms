'use strict';

const getMax = require('../code-challenges/infinite-stream.js/infinite-stream.js').getMax;
const Stream = require('../code-challenges/infinite-stream.js/infinite-stream.js').Stream;

describe('infinite stream', () => {
  it('should return N number of characters with the highest number of characters', () => {
    const test = new Stream();
    let N = 3;
    let answer = [ [ 'a', 8 ], [ 'b', 3 ], [ 'c', 2 ] ];
    expect(getMax(test, N)).toEqual(answer);
  });
  it('should return null if input is invalid', () => {
    const test = new Stream();
    expect(getMax()).toBeNull();
    expect(getMax(test)).toBeNull();
  });
});
