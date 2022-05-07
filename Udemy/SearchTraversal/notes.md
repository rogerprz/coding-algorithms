# Searching and Traversing

## BFS vs DFS

### BFS

- BFS is a type of traversal
- Think of it as a waterfall. Go as deep as they can and move onto the next
- Pro: Shortest path
- Pro: Closer Nodes of level
- Cons: More memory than DFS

### DFS

- Less Memory
- Doest Path exist?
- Cons: Can get slow

```ruby
# if you know a solution is not far from the root of the tree

Solution: BFS

# if the tree is very deep and solutions are rare:

Solution: BFS

# if the tree is very wide:

 Solution: DFS (BFS will need too much memory)

# if the solutions are frequent but located deep in the tree:

 Solution: DFS

# Determining whether a path exists b/n two nodes:

Solution: DFS

# Finding the shortest path:

Solution: BFS
```
