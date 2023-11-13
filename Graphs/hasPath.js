const hasPath = (graph, source, dst) => {
  // can be queue too, change pop to shift
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    for (const neighbor of graph[current]) {
      if (neighbor === dst) return true;
      stack.push(neighbor);
    }
  }
  return false;
};

const hasPathRecursion = (graph, source, dst) => {
  if (source === dst) return true;

  for (const neighbor of graph[source]) {
    if (hasPathRecursion(graph, neighbor, dst)) return true;
  }

  return false;
};
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

// console.log(hasPath(graph, 'f', 'k'));
hasPath(graph, 'f', 'd');

console.log(hasPathRecursion(graph, 'f', 'k'));
