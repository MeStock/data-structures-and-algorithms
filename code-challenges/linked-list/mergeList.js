'use strict';


/*

Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

*/

// const LinkedList = require('./insert-include-print.js');

function mergeList(LL1, LL2){
  if(typeof LL1 !== 'object' || typeof LL2 !== 'object') return 'Invalid input, please enter two linked list';
  let tail1 = LL1.tail;
  let tail2 = LL2.tail;
  let current1 = LL1.head;
  let current2 = LL2.head;
  let head1 = LL1.head;
  let head2 = LL2.head;

  tail1.next = tail2;
  for(let i = 1; i < LL2.length - 1; i ++ ){
    current2 = current2.next;
  }
  current2.next = tail1;

  for(let j = 1; j < LL1.length - 1; j++){
    current1 = current1.next;
  }
  current1.next = current2;
  for(let i = 1; i < LL2.length - 2; i ++ ){
    current2 = current2.next;
  }
  current2.next = current1;

  head2.next = current1;
  head1.next = head2;
  return head1;
}

// const LL1 = new LinkedList;
// LL1.insert('1');
// LL1.insert('2');
// LL1.insert('3');

// const LL2 = new LinkedList;
// LL2.insert('A');
// LL2.insert('B');
// LL2.insert('C');


// const test = mergeList(LL1,LL2);

// console.log(test);


module.exports = mergeList;
