'use strict';

const depthFirstTraversal = require('../code-challenges/graph/dfs-challenge41.js');

describe('depth first traversal', () => {
  const testAdjacencyList = {
    A: ['B','D'],
    B: ['C','D','A'],
    C: ['G','B'],
    G: ['C'],
    D: ['E','H','F','A','B'],
    E: ['D'],
    H: ['F','D'],
    F: ['D','H']
  };
  const answer = ['A','B','C','G','D','E','H','F'];
  it('should return a preordered list', () => {
    expect(Array.from(depthFirstTraversal(testAdjacencyList))).toEqual(answer);
  });
});
