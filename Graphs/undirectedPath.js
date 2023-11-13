const buildGraph = (edges) => {
  const graph = {};
  for (const [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, source, dst, visited) => {
  if (source === dst) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (const neighbor of graph[source]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }
  return false;
};

const undirectedPath = (edges, source, dst) => {
  const graph = buildGraph(edges);

  console.log('GRAPH:', graph);
  return hasPath(graph, source, dst, new Set());
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['k', 'j'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
console.log(undirectedPath(edges, 'i', 'l'));
