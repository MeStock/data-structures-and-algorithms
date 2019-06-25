'use strict';
const LinkedList = require('../linked-list/insert-include-print.js');

function findTreePath(node, start, end, LLpath = new LinkedList(), foundStart = false, foundEnd = false){
  if(!node || !start || !end) return null;
  if(node){
    if(node.value === start){
      foundStart = true;
    }
    if(foundStart){
      LLpath.insert(node.value);
      if(node.value === end){
        foundEnd = true;
        return LLpath;
      }
    }
    if(node.left){
      findTreePath(node.left, start, end, LLpath, foundStart, foundEnd);
    }
    if(node.right){
      findTreePath(node.right, start, end, LLpath, foundStart, foundEnd);
    }
  }
  return LLpath;
}

module.exports = findTreePath;
