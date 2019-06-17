'use strict';

/*

Write a function called FizzBuzzTree which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language,
determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
Return the tree with its new values.

For explicitly-typed languages: Ensure your node values are of type Object, to hold either strings or integers.

*/

function fizzBuzzTree(tree){
  if(tree === null) return;
  if(typeof tree.value === 'number'){
    if(tree.value % 3 === 0){
      if(tree.value % 5 === 0) {
        tree.value = 'fizz buzz';
      }else{
        tree.value = 'fizz';
        console.log(tree.value);
      }
    }
    if(tree.value % 5 ===0){
      tree.value = 'buzz';
    }
  }
  fizzBuzzTree(tree.left);
  fizzBuzzTree(tree.right);
}

module.exports = fizzBuzzTree;
