'use strict';

const Node = require('../code-challenges/tree/node.js');
const BinaryTree = require('../code-challenges/tree/tree.js');
const fizzbuzzTree = require('../code-challenges/fizzbuzz-tree/fizzbuzz-tree.js');


describe('Fizzbuzz Tree', () => {
  it('should create new trees', () => {
    const test = new BinaryTree();
    expect(test).toBeInstanceOf(BinaryTree);
  });
  it('should successfully create empty trees', () => {
    const test = new BinaryTree();
    expect(test.root.value).toBeUndefined();
  });
  it('should successfully change numbers divisible by 3 to fizz', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(3);
    test.root.right = new Node(4);
    fizzbuzzTree(test.root);
    expect(test.root.left.value).toBe('fizz');
    expect(test.root.right.value).toBe(4);
  });
  it('should successfully change numbers divisible by 5 to buzz', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(4);
    test.root.right = new Node(5);
    fizzbuzzTree(test.root);
    expect(test.root.left.value).toBe(4);
    expect(test.root.right.value).toBe('buzz');
  });
  it('should successfully change numbers divisible by 5 and 3 to fizzbuzz', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(7);
    test.root.right = new Node(15);
    fizzbuzzTree(test.root);
    expect(test.root.left.value).toBe(7);
    expect(test.root.right.value).toBe('fizz buzz');
  });
  it('should not change anything that isn\'t divisible by 3 or 5', () => {
    const test = new BinaryTree(1);
    test.root.left = new Node(4);
    test.root.right = new Node(7);
    fizzbuzzTree(test.root);
    expect(test.root.value).toBe(1);
    expect(test.root.left.value).toBe(4);
    expect(test.root.right.value).toBe(7);
  });
});
