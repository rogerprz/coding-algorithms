// 1. make it work
//  - Visualize the problem as a tree
//  - implement the tree using recursion
//  - Trees of the leaves are the base case
//  - Test brute force solution
//  - Large inputs would take longer, but that's before getting memoization
// 2. Make it efficient.
//  - Add a memo object
//  Shared among all recursive calls, passed in as empty object
//  - Add base case for memo, don't get rid of initial base cases.
//  - Store return values into the memo.
