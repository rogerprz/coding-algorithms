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
  console.log('-------------START----------------');
  const graph = getGraph(edges);
  const visited = new Set(nodeA);
  const queue = [[nodeA, 0]];
  let shortest = -1;
  console.log('NODE:', nodeA, nodeB, 'Q:', queue);
  console.log('G:', graph);

  while (queue.length > 0) {
    console.log('QUEUE:', queue);
    let [current, pos] = queue.shift();
    console.log('N:', current, pos);
    // const [leftNode, rightNode] = graph[node];
    pos++;
    for (const node of graph[current]) {
      if (visited.has(node)) continue;
      if (node === nodeB) {
        shortest = pos;
        return shortest;
      }
      visited.add(node);
      queue.push([node, pos]);
    }
  }
  return shortest;
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
