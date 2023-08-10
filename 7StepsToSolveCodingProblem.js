/**
 * 1. LISTEN: info: the input is two sorted array of number
 * ask question to clarify the inputs and output
 * what are the inputs?
 * what is the output?
 * what are the constrains of the input, output?
 * do not ignore information given, info is there for a reason.
 * COMMUNICATE WITH YOUR INTERVIEWER THROUGH OUT
 *
 * 2. EXAMPLE: array1 [0, 3, 4, 31] array2 [4, 6 ,30]  return [ 0, 3, 4, 4, 6, 30, 31]
 * is there any way it's a special case?
 * is it big enough?
 * write out example of input and out put for TEST CASES
 * do not try to solve problem in your head, use an example
 *
 * understand the problem by understand the input, out put, try to put problem into formula, relationship between data to formula
 * how to get started if stuck?
 *  - try 4 approaches: DIY, Simplify and Generalize, Base Case to Build, Data Structure Brainstorm.
 *
 *  - try DIY: write a sample input on the whiteboard and turn it into the correct output by hand.
 *  - look for patterns, process I use, and think about how to implement my process in code.
 *  -
 *  - try Simplify and Generalize: solve a simpler version of problem
 *  - remove or simplify one of the requirements of the problem
 *  - once i have a solution, see if i can adapt that approach for the original question
 *  - for example: trying to find k-largest element in a set? I can walk though finding the largest element, then the second largest, then the third largest. Generalizing from there to find the k-largest.
 *
 *  - try: start with an inefficient solution
 *  - start with something that'll return the right answer.
 *  - from there, I just have to optimize the brute force solution using BUD
 *
 *  - try: data structures brainstorm
 *  - pro and cons of hash table, linked list, stacks, queue, tree, tries, graphs, vectors, heaps
 *  - when we should use and when we not
 *  - look at the requirements of the problem and ask yourself if there's a data structure that has those properties.
 *
 * 3. BRUTE FORCE:
 * - using 4 approaches to state a naive algorithm and its runtime, then optimize from there.
 * - don't code yet
 * - do not push through code when confused. stop and think!
 *
 * 4. OPTIMIZE:
 *  - walk through your brute force with BUD: bottlenecks, unnecessary work, duplicated work optimization
 *      - is your current solution goes through the same data multiple times?
 *      - can you save time by looking through the data just once?
 *      - can you convert the array to a lookup table to improve runtime?
 *  - look for any unused info.
 *      - is the input array sorted?
 *      - is the binary tree balanced?
 *      - info to hint about the solution?
 *  - solve it manually on an example and reverse engineer your thought process.
 *  - solve it incorrectly and then think about why the algorithm fails
 *  - make a time and space tradeoff with hash table
 *  - throw some data structure at the problem
 *      - can you save time by using the fast lookups of a hash table?
 *      - can you express the relationship between data points as a graph?
 *      - look at the requirements of the problem and ask yourself if there's a data structure that has those properties.
 *
 *  - establish bounds on space and runtime: think out loud about the parameters of the problem. Try to get a sense for how fast your algorithm could possibly be.
 *
 * - WHEN ALL ELSE FAILS:
 *    - make it clear where you are:
 *          - state what you know, what you're trying to do, and highlight the gap between the two.
 *          - the clearer you are in expressing exactly where you're stuck, the easier it is for your interviewer to help you.
 *
 *    - pay attention to your interviewer:
 *        - if interviewer asks a question about something you just said, there's probably a hint buried in these.
 *        - Don't worry about losing your train of thought, drop what you're doing and dig into question.
 *
 * 5. WALK THROUGH
 * - now that you have an optimal solution, walk through your approach in detail.
 * - make sure you understand each detail before you start coding.
 * - only dive into code with interviewer sign off
 * - if interview ask question, dive into it because it is a hint for a solution.
 *
 * 6. IMPLEMENT
 * - your goal is to write beautiful code.
 * - modularize your code from the beginning
 * - refactor to clean up anything that isn't beautiful
 *
 * 7. TEST in this order
 * - Conceptual test: walk through your code like you would for a detailed code review
 * - Any unusual or non- standard code
 * - Hot spots, like arithmetic and null nodes
 * - Small test cases: it's much faster than a big test case and just as effective
 * - Special cases and edge cases
 *
 * - when you find bugs, fix them carefully!
 */
