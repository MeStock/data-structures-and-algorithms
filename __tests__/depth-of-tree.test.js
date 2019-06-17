'use strict';

const Node = require('../code-challenges/tree/node.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const depthOfValue = require('../code-challenges/depth-of-tree/depth-of-tree.js');


describe('Depth of value in tree', () => {
  it('should create new trees', () => {
    const test = new BinaryTree();
    expect(test).toBeInstanceOf(BinaryTree);
  });
  it('should successfully create empty trees', () => {
    const test = new BinaryTree();
    expect(test.root.value).toBeUndefined();
  });
  it('should successfully return null if tree is empty', () => {
    const test = new BinaryTree();
    expect(depthOfValue(test.root, 5)).toBeNull();
  });
  it('should successfully return null if the value was not found', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(4);
    test.root.right = new Node(5);
    expect(depthOfValue(test.root, 3)).toBeNull();
  });
  it('should return null if the inputs are invalide', () => {
    const test = new BinaryTree();
    expect(depthOfValue(test)).toBeNull();
    expect(depthOfValue()).toBeNull();
  })
  it('should successfully return the depth of tree', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(7);
    test.root.right = new Node(15);
    expect(depthOfValue(test.root, 15)).toBe(1);
  });
});
