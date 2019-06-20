'use strict';

function depthOfValue(tree, value, depth = 0){
  if(!tree) tree = null;
  if(!value) value = null;

  if(tree === null || value === undefined) return null;
  if(tree.value === value){
    return depth;
  }
  const left = depthOfValue(tree.left, value, depth + 1);
  const right = depthOfValue(tree.right, value, depth + 1);

  return left || right;
}

module.exports = depthOfValue;
