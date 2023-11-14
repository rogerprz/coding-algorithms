const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    if (explore(graph, parseInt(node), visited)) {
      count++;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;

  visited.add(current);
  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

const graph = {
  1: [2],
  2: [1],
  3: [],
  4: [6],
  5: [6],
  6: [4, 5, 7, 8],
  7: [6],
  8: [6]
};
console.log(connectedComponentsCount(graph)); // count = 3
