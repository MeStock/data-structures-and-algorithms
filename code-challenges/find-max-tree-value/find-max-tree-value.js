'use strict';

function findMaxValue(node){
  if(!node) return null;
  let Q = [];
  let maxValue = node.value;
  Q.push(node);
  while(Q.length > 0){
    if(Q[0].value > maxValue){
      maxValue = Q[0].value;
    }
    node = Q.shift();
    if(node.left){
      Q.push(node.left);
    }
    if(node.right){
      Q.push(node.right);
    }
  }
  return maxValue;
}

module.exports = findMaxValue;
