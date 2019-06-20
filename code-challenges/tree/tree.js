'use strict';

/*

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.


At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

*/

const Node = require('./node.js');

class BinaryTree{
  constructor(value){
    this.root = new Node(value);
  }
  preOrder(node = this.root, values = []){
    if(node){
      values.push(node.value);
      if(node.left !== null){
        this.preOrder(node.left, values);
      }
      if(node.right !== null){
        this.preOrder(node.right, values);
      }
    }
    return values;
  }

  inOrder(node = this.root, values = []){
    if(node){
      if(node.left !== null){
        this.inOrder(node.left, values);
      }
      values.push(node.value);
      if(node.right !== null){
        this.inOrder(node.right, values);
      }
    }
    return values;
  }

  postOrder(node = this.root, values = []){
    if(node){
      if(node.left !== null){
        this.postOrder(node.left, values);
      }
      if(node.right !== null){
        this.postOrder(node.right, values);
      }
      values.push(node.value);
    }
    return values;
  }
}

module.exports = BinaryTree;
