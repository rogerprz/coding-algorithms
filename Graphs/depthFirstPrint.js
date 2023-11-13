const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const node = stack.shift();
    console.log('NODE:', node);

    const children = graph[node];
    for (const child of children) {
      stack.push(child);
    }
  }
};

const depthFirstPrintRecursive = (graph, source) => {
  console.log('RECURSION:', source);

  for (const neighbors of graph[source]) {
    depthFirstPrintRecursive(graph, neighbors);
  }
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

depthFirstPrint(graph, 'a'); // abdfce
console.log('------------------');
depthFirstPrintRecursive(graph, 'a'); // abdfce
