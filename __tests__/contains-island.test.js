'use strict';
'use strict';

const containsIsland = require('../code-challenges/graph/contains-island.js');

describe('depth first traversal', () => {
  it('should return true if an island exists', () => {
    const testAdjacencyList = {
      A: ['E','F','B'],
      B: ['C','A','F'],
      C: ['A','B'],
      E: ['A'],
      F: ['B'],
      X: []
    };
    expect(containsIsland(testAdjacencyList)).toBeTruthy();
  });
  it('should return false if an island does not exist', () => {
    const testAdjacencyList = {
      A: ['E','F','B'],
      B: ['C','A','F'],
      C: ['A','B'],
      E: ['A'],
      F: ['B'],
    };
    expect(containsIsland(testAdjacencyList)).toBeFalsy();
  });
  it('should return null input is invalid', () => {
    expect(containsIsland()).toBeNull();
  });
});
