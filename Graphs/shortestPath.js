const getGraph = (edges) => {
  const hash = {};

  for (const [left, right] of edges) {
    if (!(left in hash)) {
      hash[left] = [];
    }
    if (!(right in hash)) {
      hash[right] = [];
    }
    hash[left].push(right);
    hash[right].push(left);
  }
  return hash;
};
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = getGraph(edges);
  const visited = new Set(nodeA);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [current, pos] = queue.shift();

    if (current === nodeB) return pos;

    for (const node of graph[current]) {
      if (visited.has(node)) continue;
      visited.add(node);
      queue.push([node, pos + 1]);
    }
  }
  return -1;
};

console.log(
  'OUTPUT IS 2: ',
  shortestPath(
    [
      ['w', 'x'],
      ['x', 'y'],
      ['z', 'y'],
      ['z', 'v'],
      ['w', 'v']
    ],
    'w',
    'z'
  )
); // -> 2

console.log(
  'OUTPUT IS 3: ',
  shortestPath(
    [
      ['a', 'c'],
      ['a', 'b'],
      ['c', 'b'],
      ['c', 'd'],
      ['b', 'd'],
      ['e', 'd'],
      ['g', 'f']
    ],
    'a',
    'e'
  )
);

// console.log(
//   'OUTPUT IS -1: ',
//   shortestPath(
//     [
//       ['a', 'c'],
//       ['a', 'b'],
//       ['c', 'b'],
//       ['c', 'd'],
//       ['b', 'd'],
//       ['e', 'd'],
//       ['g', 'f']
//     ],
//     'b',
//     'g'
//   )
// );
