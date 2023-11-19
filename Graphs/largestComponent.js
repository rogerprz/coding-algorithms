const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;
  let count = 0;

  const traverse = (graph, current, visited) => {
    if (visited.has(current)) return false;

    visited.add(current);
    count++;
    for (const node of graph[current]) {
      console.log('T:', node);
      traverse(graph, node, visited);
    }

    return true;
  };
  for (const node in graph) {
    if (traverse(graph, node, visited)) {
      if (count > max) max = count;
    }
    count = 0;
  }
  // test
  return max;
};

const largestComponentSolution = (graph) => {
  const visited = new Set();

  let largest = 0;

  const explore = (graph, current, count) => {
    if (visited.has(current)) return 0;

    visited.add(current);
    let size = 1;
    for (const node of graph[current]) {
      count++;
      size += explore(graph, node, count);
    }
    return size;
  };

  for (const neighbors in graph) {
    const size = explore(graph, neighbors, 1);
    if (largest < size) largest = size;
  }
  console.log('COUNT:', largest);
  return largest;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
  5: [0, 8],
  8: [0, 5]
};

console.log(largestComponent(graph));

console.log(largestComponentSolution(graph));
console.log(
  'OUTPUT is 4: ',
  largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  })
);

console.log(
  'OUTPUT is 5: ',
  largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
  })
);

console.log(
  'OUTPUT is 6: ',
  largestComponent({
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  })
);
