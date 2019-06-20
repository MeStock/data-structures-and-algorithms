'use strict';

const findMaxValue = require('../code-challenges/find-max-tree-value/find-max-tree-value.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const Node = require('../code-challenges/tree/node.js');

describe('Find Max Value of a Binary Tree', () => {
  it('should return null if the input in invalid', () => {
    expect(findMaxValue()).toBeNull();
  });
  it('should return the max value stored within a tree', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(4);
    test.root.right = new Node(5);
    expect(findMaxValue(test.root)).toBe(5);
  });
  it('should be able to search negative numbers', () => {
    const test = new BinaryTree(-1);
    test.root.left = new Node(4);
    test.root.right = new Node(5);
    expect(findMaxValue(test.root)).toBe(5);
  });
});

