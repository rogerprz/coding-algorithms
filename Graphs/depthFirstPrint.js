const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const node = stack.shift();
    console.log('NODE:', node);
    const children = graph[node];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      //   console.log('C:', child);
      stack.push(child);
    }
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

depthFirstPrint(graph, 'a');
