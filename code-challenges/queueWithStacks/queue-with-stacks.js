'use strict';

/*

Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

Example
enqueue(value)
Input	                    Args	              Output
[10]->[15]->[20]	         5	              [5]->[10]->[15]->[20]
                            5	               [5]

dequeue()
Input	                     Output            	Internal State
[5]->[10]->[15]->[20]	        20	              [5]->[10]->[15])
[5]->[10]->[15]	              15               	[5]->[10]

*/

const Stack = require('../stacksandqueues/stack.js');

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack1.top === null) return 'Nothing to dequeue';
    while(this.stack1.top !== null){
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
    if(this.stack2.top === null) return 'Nothing to dequeue';
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;

