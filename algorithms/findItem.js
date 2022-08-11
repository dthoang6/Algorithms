/* S1:Problem Details, key points 
    Given 2 arrays, create a function that's let a user know true or false
    whether these two arrays contain any common items
*/

/* S2: Ask questions to confirm, double check input, output 
    input: 2 arrays, 2 parameters
    output: true or false
*/

/* S3: what is the most important value, main goal of the problem? time, space, readable 
    -how large is the array?
    -is our goal here to be as efficient as possible?
    -is time complexity is more important?
    -how about space complexity?
*/

/* S4: Gather enough assumption to start solve problem 
    -pay attention to time limit: 45m
    -do not ask too many questions
    -understand the question and start with easy solution
*/

/* S5: Easy, brute force solution: first solution 
    -nested for loop 2 arrays
    -big O n^2
*/

/* S6: Explain why brute force solution is not optimal based on BigO

*/

/* S7: Try to improve the brute force solution: bottle neck, repeat code,
common patterns 
    -nested for loop: use hash table
*/

/* S8: Explain your new approach, walk through your code, steps you are going to
follow. 
 - step 1: convert the first array into an object { item: array1[i], value: true}
 - for loop the second array to check for common item
 -time complexity is O(n)

*/

/* S9: Modularize your code from the very beginning 

*/

/* S10: Start coding: 
-write something, and start with the easy parts 
-a lot of interviewers ask questions that your won't be able to fully answer on time.
-how can I show that I can think, and working toward a solution.
-break things up in function, makeup a function
-------

*/

const array1 = ["a", "b", "c", "d"]; //can be large array
const array2 = ["x", "y", "z", "a"]; //can test with large array

function findItem(arr1, arr2) {
  //create empty object
  let map = {};

  //loop through first array and fill the map object
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[1];
      map[item] = true;
    }
    console.log(map);
  }

  //check the item in second array if it is in fist array using map object to achieve time complexity O(n)
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

/* S11:Error check by breaking the code
-never make assumption about input
-always check for false inputs that you don't want
-comment in your code, the checks that you want to do
-tell the interviewer that you would write tests now to make function fail
----

*/

/* S12: Test your code
-check for no parameters, 0, undefined, null, massive inputs, async code...
-ask the interviewer if we can make assumption about the code.
-Can I make the answer return an error?
-Am I repeating chunk of code ---> Functions
----

*/

/* S13: Talk to interview where you would improve the code
-Does it work?
-Are there different approach?
-Is it readable?
-What would you google to improve?
-How can performance be improved
-What was the most interesting solution?
----
*/
