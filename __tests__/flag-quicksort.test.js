'use strict';

const flagQuicksort = require('../code-challenges/sorting/flag-quicksort');

describe('using quicksort to create an el salvadorian flag', () => {
  it('should create a flag', () => {
    let flagArray = ['white','blue','blue', 'white', 'white', 'blue', 'white', 'white', 'white', 'shield', 'blue', 'blue', 'blue'];
    const answer = undefined;
    expect(flagQuicksort(flagArray)).toEqual(answer);
  });
  it('should return null if input is invalid', () => {
    expect(flagQuicksort()).toBeNull();
  });
});
