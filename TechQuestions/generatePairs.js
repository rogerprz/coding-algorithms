const sequences = {
  AC: [5, 15],
  BC: [3, 20],
  PQ: [15, 22],
  XY: [22, 35],
  AB: [20, 32],
  BT: [9, 13]
};

const proteins = new Map([
  [['AC', 'PQ'], 'P1'],
  [['AC', 'PQ', 'XY'], 'P2'],
  [['BC', 'AB'], 'P3'],
  [['BT', 'AC'], 'P4']
]);

function generateProtein(sequences, proteins) {
  const result = [];

  for (const [sequencesList, proteinId] of proteins) {
    const seqArr = sequencesList.split(',');
    const range = [Infinity, -Infinity];
    // ['AC', 'PQ'],
    // ['AC', 'PQ', 'XY'],
    // ['BC', 'AB'],
    // ['BT', 'AC'],
    // 'P1', 'P2', 'P3', 'P4'
    for (const seq of seqArr) {
      const [start, end] = sequences[seq];
      range[0] = Math.min(range[0], start);
      range[1] = Math.max(range[1], end);
    }

    let isValid = true;

    for (const seq of seqArr) {
      const [start, end] = sequences[seq];

      if (start < range[0] || end > range[1]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      result.push([proteinId, range[0], range[1]]);
    }
  }
  console.log(result);
  return result;
}

generateProtein(sequences, proteins);

// (generate_protein) => (P1, 5, 22), (P2, 5, 35), (P3, 3, 32);
