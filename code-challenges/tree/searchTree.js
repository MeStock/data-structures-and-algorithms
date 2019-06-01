'use strict';


/*

Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

*/

const BinaryTree = require('./tree');
const Node = require('./node');

class BinarySearchTree extends BinaryTree{
  add(value){
    if(!this.root){
      this.root = new Node(value);
    }
    let current = this.root;
    while(current){
      if(value < current.value){
        if(!current.left){
          current.left = new Node(value);
          return;
        }
        current = current.left;
      }
      if(value > current.value){
        if(!current.right){
          current.right = new Node(value);
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value){
    if(!this.root || typeof value !== 'number'){
      return false;
    }
    let current = this.root;
    while(current){
      if(current.value === value){
        return true;
      }else if(value < current.value){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
