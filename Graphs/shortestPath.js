const shortestPath = (edges, nodeA, nodeB) => {};

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

console.log(
  'OUTPUT IS -1: ',
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
    'b',
    'g'
  )
);
