'use strict';
const BTnode = require('../code-challenges/tree/node.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const findTreePath = require('../code-challenges/findTreePath/findTreePath.js');
const LinkedList = require('../code-challenges/linked-list/insert-include-print.js');

describe('finding the path between two numbers in a binary tree', () => {
  it('should return a linked list representation of the path', () => {
    let test = new BinaryTree(1);
    test = test.root;
    test.right = new BTnode(10);
    test.right.right = new BTnode(4);
    test.right.right.right = new BTnode(8);

    test.left = new BTnode(15);
    test.left.left = new BTnode(6);
    test.left.left.left = new BTnode(7);

    expect(findTreePath(test, 10, 8)).toBeInstanceOf(LinkedList);
  });

  it('should return null if the input is invalid', () => {
    let test = new BinaryTree(1);

    expect(findTreePath()).toBeNull();
    expect(findTreePath(test)).toBeNull();
    expect(findTreePath(test, 1)).toBeNull();
  });

  it('should return null if no path is found', () => {
    let test = new BinaryTree(1);
    test = test.root;
    test.right = new BTnode(10);
    test.right.right = new BTnode(4);
    test.right.right.right = new BTnode(8);

    test.left = new BTnode(15);
    test.left.left = new BTnode(6);
    test.left.left.left = new BTnode(7);
    expect(findTreePath(test, 2, 500).head).toBeNull();
  });
});


let test = new BinaryTree(1);
test = test.root;
test.right = new BTnode(10);
test.right.right = new BTnode(4);
test.right.right.right = new BTnode(8);

test.left = new BTnode(15);
test.left.left = new BTnode(6);
test.left.left.left = new BTnode(7);
