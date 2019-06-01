'use strict';


/*

Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal

*/

const Node = require('../code-challenges/tree/node.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const BinarySearchTree = require('../code-challenges/tree/searchTree.js');

describe('Trees', () => {

  describe('Nodes', () => {
    it('should create new nodes', () => {
      expect(new Node()).toBeInstanceOf(Node);
    });
  });

  describe('Binary Trees', () => {
    it('should create new trees', () => {
      const test = new BinaryTree();
      expect(test).toBeInstanceOf(BinaryTree);
    });
    it('should successfully create empty trees', () => {
      const test = new BinaryTree();
      expect(test.root.value).toBeUndefined();
    });
    it('should successfully add a left child and right child to a root', () => {
      const test = new BinaryTree('root');
      test.root.left = new Node('left');
      test.root.right = new Node('right');
      expect(test.root.left.value).toBe('left');
      expect(test.root.right.value).toBe('right');
    });
    it('should successfully return a collection of preordered values', () => {
      const test = new BinaryTree('root');
      test.root.left = new Node('left');
      test.root.right = new Node('right');
      const result = test.preOrder();
      expect(result).toEqual(['root', 'left', 'right']);
    });
    it('should successfully return a collection of inordered values', () => {
      const test = new BinaryTree('root');
      test.root.left = new Node('left');
      test.root.right = new Node('right');
      const result = test.inOrder();
      expect(result).toEqual(['left', 'root', 'right']);
    });
    it('should successfully return a collection of postordered values', () => {
      const test = new BinaryTree('root');
      test.root.left = new Node('left');
      test.root.right = new Node('right');
      const result = test.postOrder();
      expect(result).toEqual(['left', 'right', 'root']);
    });
  });

  describe('Binary Search Trees', () => {
    it('should create new search tree', () => {
      const test = new BinarySearchTree();
      expect(test).toBeInstanceOf(BinarySearchTree);
    });

    it('should successfully add to the tree in the correct order', () => {
      const test = new BinarySearchTree(100);
      test.add(50); //first node to the left
      test.add(10); //node to the left of 50
      test.add(60); //node to the right of 50
      test.add(200); //first node to the right
      test.add(150); //node to the left of 200
      test.add(300); //node to the right of 200
      expect(test.root.left.value).toEqual(50);
      expect(test.root.left.left.value).toEqual(10);
      expect(test.root.left.right.value).toEqual(60);
      expect(test.root.right.value).toEqual(200);
      expect(test.root.right.left.value).toEqual(150);
      expect(test.root.right.right.value).toEqual(300);

    });
  });
});
