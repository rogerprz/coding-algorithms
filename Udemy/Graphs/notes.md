## Graphs

### Types of Graphs

- Directed
  - Goes usually in one direction
  - Twitter can follow but they don't need to follow you
- Undirected
  - Can go back and forth
  - Facebook is
- Weighted
  - Optimal path such as maps
- Unweighted
- Cyclic
  - Can go in a loop
- Acyclic
  - Do not go in a loop

Ways to represent a graph:

- Adjacent matrix
- Edge list
- Adjacent list

  ```javascript
  // Edge list
  const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
  ];
  // Adjacent list
  const graphAdj = [[2], [2, 3], [0, 1, 2], [1, 2]];

  // Adjacent Matrix
  const graphMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
  ];
  ```
