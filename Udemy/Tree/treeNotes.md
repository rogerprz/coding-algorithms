# Tree

## Binary Tree

- In a perfect binary tree, all the nodes before the bottom plus one equal the bottom level of the tree.
- A full binary tree is a binary tree in which every node has either zero or two children. They can be represented at multiple levels.

**Big O Notation:**

- lookup O(log N)
- insert O(log N)
- delete O(log N)

Calculating nodes in a tree:

- level 0: 2^0 = 1
- level 1: 2^level(aka=1) = 2
- level 2: 2^2 = 4
- level 3: 2^3 = 8

number of nodes = 2^height - 1
log nodes = height

## Balance Search Tree

| Pros             | Cons               |
| ---------------- | ------------------ |
| Better than O(n) | No O(1) operations |
| Ordered          |                    |
| Flexible size    |                    |
