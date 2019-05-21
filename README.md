# data-structures-and-algorithms

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

# Linked Lists
Create methods that can traverse a linked list to append to nodes, insert new nodes, and print out the values of the collection of nodes.

## Challenge
Traversing a linked list can be difficult. 

## Approach & Efficiency
I spent 1hour whiteboarding this problem with the help of 4 other students. (Becky Peterson, Jesse Van Volkinburg, Bonnie Wang, Jag Singh). We talked about the edge cases for each method and worked out all the details. This has helped in the past and typially makes writting the actual code a lot more smooth. I ended up taking a different approach because the psuedo code had small errors. Broke the problem down into smaller pieces to help recognize how the information was being traversed.

## Solution
![whiteboard linked list](/assets/linkedlist1.jpeg)
![whiteboard linked list](/assets/linkedlist2.jpeg)
![whiteboard linked list](/assets/linkedlist3.jpeg)


