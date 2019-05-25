'use strict';

const LinkedList = require('../code-challenges/linked-list/nodeFromEnd.js');

describe('Linked list nodeFromEnd', () => {
  const test = new LinkedList;
  test.insert('head');
  test.insert('second node');
  test.insert('second to last node');
  test.insert('first to last node');
  test.insert('last node');
  it('where k is greater than the length of the linked list', () => {
    expect(test.nodeFromEnd(6)).toEqual('Value selected exceeds link list length');
  });
  it('where k is the same length as the linked list', () => {
    expect(test.nodeFromEnd(5)).toEqual('head');
  });
  it('where k is not a positive number', () => {
    expect(test.nodeFromEnd(-1)).toBe('Negative numbers are not valid');
  });
  it('where the linked list is the size of one', () => {
    expect(test.nodeFromEnd(1)).toEqual('first to last node');
  });
  it('should return the second to the last node', () => {
    expect(test.nodeFromEnd(2)).toEqual('second to last node');
  });
});
