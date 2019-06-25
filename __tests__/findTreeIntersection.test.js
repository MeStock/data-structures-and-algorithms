'use strict';

const findTreeIntersection = require('../code-challenges/findTreeIntersection/findTreeIntersection.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const Node = require('../code-challenges/tree/node.js');

describe('Find all intersections within two trees', () => {
  it('should return a set of common values between the trees', () => {
    const test1 = new BinaryTree(1);
    test1.root.right = new Node(2);
    test1.root.left = new Node(3);
    const test2 = new BinaryTree(2);

    const answer = new Set();
    answer.add(2);

    expect(findTreeIntersection(test1, test2)).toEqual(answer);
  });

  it('should return null if there are invalid inputs', () => {
    const test = new BinaryTree();

    expect(findTreeIntersection()).toBeNull();
    expect(findTreeIntersection(test)).toBeNull();
  });

  it('should return an empty set if no common values are found', () => {
    const test1 = new BinaryTree(1);
    const test2 = new BinaryTree(2);

    expect(findTreeIntersection(test1, test2)).toEqual(new Set());
  });

});
