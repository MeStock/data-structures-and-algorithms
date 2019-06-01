'use strict';

const LinkedList = require('../code-challenges/linked-list/append-insert-before-after.js');

describe('Linked list', () => {
  it('shound successfully build an empty linked list', () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
  });
  it('can properly add a node to the list', () => {
    const test = new LinkedList();
    expect(test.append('test')).toEqual(expect.objectContaining(test));
  });
  xit('should properly insert before the first node of the list', () => {
    const test = new LinkedList();
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertBefore('head','inserted before node');
    expect(test.value).toBe('inserted before node');
  });
  xit('should properly insert before i in the middle of the list', () => {
    const test = new LinkedList();
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertBefore('first node','inserted node');
    expect(test.next.value).toEqual('inserted node');
  });
  xit('should properly insert after the last node of the list', () => {
    const test = new LinkedList();
    test.append('head');
    test.append('first node');
    test.insertAfter('first node', 'inserted node');
    expect(test.next.next.value).toEqual('inserted node');
  });
  xit('should properly insert in the middle of the list', () => {
    const test = new LinkedList();
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertAfter('first node', 'inserted node');
    expect(test.next.next.value).toEqual('inserted node');
  });
});