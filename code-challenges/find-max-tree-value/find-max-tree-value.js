'use strict';

const Queue = require('../stacksandqueues/queue.js');

function findMaxValue(node){
  if(!node) return null;
  let Q = new Queue();
  let maxValue = node.value;
  Q.enqueue(node);
  while(Q.peek()){
    node = Q.dequeue();
    if(node.left){
      Q.enqueue(node.left);
    }
    if(node.right){
      Q.enqueue(node.right);
    }
    if(node.value > maxValue){
      maxValue = node.value;
    }
  }
  return maxValue;
}

module.exports = findMaxValue;
