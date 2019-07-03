# data-structures-and-algorithms

* [travis](https://www.travis-ci.com/MeStock/data-structures-and-algorithms)

<h2>Overview</h2>
    <p>This repo is a place to organize completed code challenges. Within the code challenges folder, you can find examples of different data structure and algorithm problems with their optimzed solutions.</p>

<h2>Tools & Languages</h2>
    <ul>
        <li>Javascript</li>
        <li>Node modules</li>
    </ul>

# Reverse an Array
The reverse array function will take in an array as a parameter and return the elements of the array in reverser order.

## Challenge
Moving elements in an array can modify the original array and affect loops. To avoid this, creating a new results array was used.

## Approach & Efficiency
I knew that I needed some sort of looping mechanism, so I started by visualizing the input and output of the array. <br><br>
     I: [1,2,3,4,5] <br>
     O: [5,4,3,2,1] <br><br>
This helped me realize that starting at the end of the array would be ideal. Next, I considered my options for how to store the results. I chose to use a new empty array instead of modifying the original. My first solution took 15min to solve.

Similarliy for the stretch goal, I started with a visualization and a new results array. Instead of starting my loop at the end, I used the pop method for arrays. This was a little harder to implement since pop modifies the array, however I stored the original length to overcome this challenge. My second solution took 15min to solve.

## Solution
![whiteboard array reverse](/assets/array-reverse.jpeg)

# Array Shift
The insert shift array function will take in an array and item as a parameter and return the array with the item inserted in the middle of the array.

## Challenge
I decided to modify the array in place to save on time and memory. A lot of things had to be considered to work around this challenge.

## Approach & Efficiency
I knew that I needed to shift the last half of the array by one index to make an insertion. I started by visualizing the input and output of the array.<br><br>
     I: [1,2,3,4,5] 100<br>
     intermediate step: [1,2,3,4,5,5]<br>
     intermediate step: [1,2,3,4,4,5]<br>
     O: [1,2,3,100,4,5]<br><br>
This helped me see how to set up my for loop to accomodate the addition of a new item in the middle of the array. It also helped me recognize that the first half of the array did not need to be modified, which solidified my modified in place idea. I spent 1hr doing a white board for this assignemnt, implementation took 15min.

## Solution
![whiteboard insert shift array1](/assets/array-shift1.jpeg)
![whiteboard insert shift array2](/assets/array-shift2.jpg)
![whiteboard insert shift array3](/assets/array-shift3.jpg)

# Array Binary Search
The binary search function takes in a sorted array and key as parameters. It will search the sorted array for a value that matches the key and return the index at which is was found. If no match is found, it will return -1.

## Challenge
To make the search a little quicker I had to implement some logic to split the array in halfs at every search. Luckily the input array is sorted which is the only reason this was successful.

## Approach & Efficiency
I started with whiteboarding which helped visualize the steps needed to do the search. This helped me recognize that I would need to keep track of previous searches in order to stop my function when no match was found. To do this, I created a tempIdx that stored the previously checked idx. If the previously check idx equaled the curently check idx my function would stop. When the function stoped, if the key and value matched I would return that idx. If not, I would return -1. I spent 1hr doing the whiteboard, 30min implementing the code, and 3mins writing the tests.

## Solution
![whiteboard array binary search](/assets/array-binary-search.jpeg)

# Linked Lists - insert before and after
Create methods that can traverse a linked list to append to nodes, insert new nodes, and print out the values of the collection of nodes.

## Challenge
Traversing a linked list can be difficult. 

## Approach & Efficiency
I spent 1hour whiteboarding this problem with the help of 4 other students. (Becky Peterson, Jesse Van Volkinburg, Bonnie Wang, Jag Singh). We talked about the edge cases for each method and worked out all the details. This has helped in the past and typially makes writting the actual code a lot more smooth. I ended up taking a different approach because the psuedo code had small errors. Broke the problem down into smaller pieces to help recognize how the information was being traversed.

## Solution
![whiteboard linked list](/assets/linkedlist1.jpeg)
![whiteboard linked list](/assets/linkedlist2.jpeg)
![whiteboard linked list](/assets/linkedlist3.jpeg)

# Linked Lists - node k spots from end of list
Create method a method that takes in parameter k, that returns the nodes value at k spots from the end of the linked list.

## Challenge
Finding the end of the node, and traversing to k spots before the end. Double linked lists have pointers in both directions, however, singly link lists can only move in one direction.

## Approach & Efficiency
My link lists have a length property. I used this to find the node that was k distance from the end. (ie: link list length - k). From here the function was straight forward, traverse through the list length - k times. At this point stop and return the current nodes value. Once this was working as expected I added conditionals at the begining of the method that restricted input types. For example: negative numbers and strings.

## Solution
![whiteboard linked list](/assets/nodeFromEnd.jpg)

# Linked Lists - mergeList
Create function that takes in two linked list as its parameters and returns the two lists ziped together. <br>
* Ex: [1]->[2]->[3] & [A]->[B]->[C] returns [1]->[A]->[2]->[B]->[3]->[C]

## Challenge
Traversing through a linked lists and adjusting the pointers of each node while keeping BigO of space to O(1).

## Approach & Efficiency
I started with a lot of visual diagrams to see how the information was being moved around. Originally, I wanted to zip from the begining of each linked lists. With the help of my diagrams, I was able to recognize that zipping from the ends of the linked lists would keep the BigO of space to O(1). From there I was able to develop some psuedo code that worked for linked list of length 3. With more time, I will adjust this function to handle lists of any size now that a pattern has been accomplished.

## Solution
![whiteboard linked list](/assets/mergeList.jpg)

# Stacks and Queues
A Stack is a data structure that consists of Nodes. Each Node references the next node in the stack, but it can not reference it's previous. It operates on the last in first out order. Similarly, a Queue is a data structure that consists of Nodes. Each node references the next in the queue, but it cannot reference its previous. However, a Queue operates on the first in first out order.

## Challenge
Create a class called with the following methods: push(), pop(), peek(). Create a class called Queue with the following methods: enqueue, dequeue, peek.

## Approach & Efficiency
* Stack: I only keep track of the top of the stack. 
* * push(entry): Everytime push is called, a new node is created with the input value. I point the new entry at the top of the stack then change the top reference to the new entry. This is O(1) for time and O(1) for space.
* * pop(): Everytime pop is called, I create a reference to the top of the stack in a new varibale. Then I change the tops pointer to the next item in the stack and return the variable holding the reference. This is O(1) in time and O(1) in space.
* * peek(): Everytime peek is called, I return the value of the top. This is O(1) in time and O(1) in space.

* Queue: I keep track of the front and rear of the queue.
* * enqueue(entry): Everytime enqueue is called, a new node is created with the input value. I point the rear node at the new entry and set the new entry as the rear reference. This is O(1) in time and O(1) in space.
* * dequeue(): Everytime dequeue is called, I set a reference to the front of the queue in a new variable. Then I change the pointer of the front to the next item in the queue and reutnr the variable holding the reference to the front. This is O(1) in time and O(1) in space.
* * peek(): Everytime peek is called, I return the value of the front. This is O(1) in time and O(1) in space.

## API
* Stack:
* * push(entry): Input: 5 --> Output: no output;
* * pop(): Input: no input --> Output: value of the popped off node;
* * peek(): Input: no input --> Output: value of the node at the top of stack;

* Queue:
* * enqueue(entry): Input: 3 --> Output: no output;
* * dequeue(): Input: no input --> Output: value off the dequeued node;
* * peek(): Input: no input --> Output: value of the node at the front of the queue;


# Queues with Stacks
Create a class called PseudoQueue that uses 2 stack objects internally to enqueue and dequeue with first-in0first-out order. Stacks can perform standard peek, pop, push methods. <br>

## Challenge
Convert stacks normal flow from last-in-first-out to queue normal flow of first-in-first-out.

## Approach & Efficiency
enqueue: Queues and Stacks behave in the same way when adding to the list. Pushing to the end of the queue is equivalent to adding to the top of a Stack. This is O(1) in time and space.

dequeue: In order to dequeue in reverse flow of a stack. I transfered the stack with values into a new stack to reverse the order, unitl all values have been tranfered. Once that is compelete, I poped off the top of the new stack which is now the first value that went into the first stack. This is O(1) in space and O(n) in time, where n is the length of the stack.

## Solution
![whiteboard queues with stacks](/assets/queueswithstacks.jpg)

# Animal Shelter with Queues
Create a class called AnimalShelter that only takes in dogs and cats. The shelter operates on the first in first out order. <br>

## Challenge
* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
* dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
I used two queues to keep dogs (dogQ) and cats (catQ) separate.

enqueue: Check if the value passed in is 'cat', or 'dog'. Use built in enqueue method to add the animal to the correct queue. This is O(1) in time and space.

dequeue: Check if the value passed in is 'cat' or 'dog'. Use built in dequeue method to remove the first animal from the correct queue. This is O(1) in time and space.

Add in some conditionals for edge cases:
* Do not dequeue if queue is empty
* Convert all user input to lower case

## Solution
![whiteboard fifo animal shelter](/assets/fifo-animal-shelter.jpg)

# Trees
Trees are a type of data structure made up of `nodes`. A binary tree start with a root node that has a pointer for a left child and right child node. Each child node also has a set of pointers toward a left child and right child node. A binary search tree is a tree that adds nodes to the left of the parent node its value is less than the parent - or to the right of the parent node if its value is greater than the parent. 

## Challenge
Create a Binary Tree class with preorder, inorder, and post order methods.
Create a Binary Search Tree class with add and contain methods.

## Approach & Efficiency
Binary Tree: Traversing the tree will have a O(n) in time, where n is the number of nodes in the tree and O(1) in space. Similarly, inserting into the tree will have O(n) in time.

BinarySearch Tree: Travering the tree will have an O(n) in time, where n is the number of nodes in the tree and O(1) in space. However inserting into the tree will have O(h) in time, where h is the height of the tree.

## API
Binary Trees:
preOrder(): returns an array of values stored in the tree in the order: root, left right.
inOrder(): returns an array of values stored in the tree in the order: left, root, right.
postOrder(): returns an array of values stored in the tree in the order: left, right, root.

Binary Search Trees:
add(value): traverses through the tree - going right if the new value is less than the current nodes value or going left if the new value is greater than the current nodes value - until a leaf is found. Then inserts the new value either to the right or left of the leaf node depending on its value.

contains(value): traverses through the tree and returns true if the tree contains the value. returns false if tree is empty, an invalid value is given, or the value was not found.

# Fizzbuzz Tree
Create a function called FizzbuzzTree that takes in the root of a tree. It traverses the tree and replaces values divisible by 3 with the string 'fizz', values divisible by 5 are replaced with 'buzz', and values divisible by 3 and 5 are replaced with 'fizzbuzz'.

## Challenge
* traverse tree, checking the type of the value within each node. If the value is a number - check the conditions listed above. Modify tree in place.

## Approach & Efficiency
To modify the tree in place, I used recursion to traverse the tree.
Time: O(n) - where n is the number of nodes in the tree
Space: O(1) - Modify the tree in place - however, O(n) where n is the call stack since this function uses recursion.

Add in some conditionals for edge cases:
* Do not traverse is the tree is empty
* Do not check if values are divisible if they are not numbers

## Solution
![whiteboard fizzbuzz tree](/assets/fizzbuzzTree.jpeg)

# Find the depth of a value within a Binary Tree
Create a function called depth of value that takes in the root of a tree and a value. It will search the tree for a value and if found return the depth at which it was found.

## Challenge
* traverse tree, checking values of each node and tracking the depth. Using recursion to keep track of the depth going down the tree and passing the depth back through the call stack when the value is found.

## Approach & Efficiency
Time: O(n) - where n is the number of nodes within the tree.
Space: O(H) - where H is the height of the tree. 

Add in some conditionals for edge cases:
* Do not traverse is the tree is empty
* Return null if no value is found

## Solution
![whiteboard depth of value](/assets/depthOfValue.jpg)

# Reverse an Array
The reverse array function will take in an array as a parameter and return the elements of the array in reverser order.

## Challenge
Modify array in place

## Approach & Efficiency
I knew that I needed some sort of looping mechanism, so I started by visualizing the input and output of the array. <br><br>
     I: [1,2,3,4,5] <br>
     O: [5,4,3,2,1] <br><br>
Keeping track of the front index and back index  and making swaps was the optimal solution. 

LOOP 1:
[5,2,3,4,1] 
<br><br>
LOOP 2:
[5,4,3,2,1]
<br><br>
LOOP 3: reached the middle of the array so return the current state of the array.

The time complexity for this is O(n) where n is half the length of the list and space complexity is O(1) because we are modifying in place.
You can also solve this problem using built in array methods (reverse, push, pop) or recursively but the space/time complexities are not as efficient.

## Solution
![whiteboard array reverse](/assets/more-array-reverse.jpg)

# Find Sum of Integers
Given an array and key, find the first pair of values within the array that add up and equal the key.

## Challenge
Modify array in place

## Approach & Efficiency
I used a hashmap to implement this search. Add all the values to a hashmap. Iterate through array, calculate the difference between each index of the array and the key. Use the hashmap to check if the difference exists within the map.

Time complexity: O(n) where n is the length of the array
Space complexity: O(n) where n is the length of the array

The brure force method for this problem is to check every single pair within the array using nesed for loops. This would result in time complexity of O(n^2) and space complexity of O(1). Depending on individual cases, you would consider this case to save space.

## Solution
![whiteboard array reverse](/assets/findSumOfInts.jpg)

# Hashtables
We mob programmed this challenge. Group members: Melissa Stock, Bonnie Wang, Jagdeep Singh, Rebecca Peterson, Joe Jemmely
Implement a hashtable with the following built in methods : add(key, value), get(key), contains(key), and hash(key);

## Challenge
* add(key, value) returns the value that was just added
* get(key) returns the value associated with the key
* contains(key) returns true/false if the hashtable contains a value with the associated key
* hash(key) returns an index associated with the unique hashed key

## Approach & Efficiency
* add(key, value) Time: O(L) where L is the length of the string Space: O(1) *if you ignore the hashing Time: O(1)
* get(key) Time: O(L) where L is the length of the string Space: O(1)  *if you ignore the hashing Time: O(1)
* contains(key) Time: O(L) where L is the length of the string Space: O(1) *if you ignore the hashing Time: O(1)
* hash(key) Time: O(L) where L is the length of the string Space: O(1)

# Find Tree Path
Given a start and an end value, traverse a tree and return a linked list representation of the path between the start and end value.

## Challenge
* Traverse the tree
* Keep track of values
* Create a linked list of values for the path
* Add/remove values that belong in path

## Approach & Efficiency
Broke the problem into several smaller problems listed above to identify an approach. I used recursion to traverse the tree and modified the linked list in place to keep track of values within the given path.

Time complexity: O(H) where H is the height of the tree
Space complexity: O(n) where n is the length of the linked list

## Solution
![whiteboard array reverse](/assets/findTreePath.jpg)

# Find Intersections Between Two Trees
Given two binary trees, find all the intersections between the two. Meaning, return all the common values that they share between them.

## Challenge
* Traverse tree 1
  * Add all its values into a set 
  * Return the set
* Traverse tree 2
  * At eact node - if the value exists in the previous set
    * add that value to new set
  * Return new set
* Return the new set

## Approach & Efficiency
Broke the problem into 3 functions listed above. Time complexity O(n) where n is the sum of nodes between the two trees. Space complexity O(m) where m is the the larger of two - either the height of the second tree or the number of nodes in the first tree.

## Solution
![whiteboard array reverse](/assets/findTreeIntersection.jpg)

# Left Join
Given two hashmaps, join the values of matching keys into the left map. If the key does not exist in the right map, add null to the join. Return a new data structure of the joined key value pairs.


Input:

* Map1 = {k1:v1, k2:v2, k3:v3}
  
* Map2 = {k1:val1, k2:val2, k4:val4}

Output:

* {k1:[v1,val1], k2:[v2,val2], k3:[v3,null]}

## Challenge
* Iterate through Map1
  * Add all its key value pairs to a new object where the keys remain the same but the values are added to an array
  * Check if value exists in Map2
    * if yes - get that value and add it to the end of the array
    * if no - add null to the end of the array
  * return the new object

## Approach & Efficiency
Time complexity is O(n) where n is number of keys in Map1
Space complexity is O(n) where n is the sum of the values in Map1 and Map2


## Solution
![whiteboard array reverse](/assets/leftjoin.jpg)

# Find Max and Min Zeros
Given a 2D array of sorted binary values, find the row that has the most and least number of zeros.


Input:
[
  [0,0,0,1],
  [0,0,0,1],
  [0,0,1,1],
  [0,0,0,1],
  [0,0,0,0],
  [0,0,0,1],
];

Output:

* {max: 4, min: 2}

## Challenge
* Iterate through all the rows
  * For each row - find the particition point (where 0 changes to 1) using a binary search
  * Compare partition point index to the current max & min
  * The row with the lowest parition point index has the least zeros
  * THe row with the largest partition point index has the most zeros

## Approach & Efficiency
Time complexity is O(mlog(n)) m is the number of rows and n is the number of indexies
Space complexity is O(1) because we are only storing the max & min regarldless of the shape of the input


## Solution
![whiteboard array reverse](/assets/max-and-min-zeros.jpg)

# Flags & Quicksort
Give an array with values: blue, white and shield - sort the array so that it represents the el-salvadorian flag. The white and blue values will always be even and there is only one shield.


Input:<br>
['white', 'blue', 'blue', 'white', 'white', 'white', 'shield', 'blue', 'blue'];

Output:<br>
['blue', 'blue', 'white','white', 'shield', 'white', 'white', 'blue', 'blue'];



## Challenge
* Set the pivot to the last value
  * iterate through array
  * check if value is blue, white or shield (using switch)
  * mark firstblue/white depending on each value
  * if shield is found move it to the center
  * track how many blues/white are on each side
  * swap values based on firstblue/white and lastblue/white locations

## Approach & Efficiency
Time complexity is O(n) n is the number of values within the array
Space complexity is O(1) because we modifying in place


## Solution
![whiteboard array reverse](/assets/flag-quicksort.jpeg)