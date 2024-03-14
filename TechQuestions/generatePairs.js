const sequences = {
  AC: [5, 15],
  BC: [3, 20],
  PQ: [15, 22],
  XY: [22, 35],
  AB: [20, 32],
  BT: [9, 13]
};

const proteins = {
  'AC,PQ': 'P1',
  'AC,PQ,XY': 'P2',
  'BC,AB': 'P3',
  'BT,AC': 'P4'
};

function generateProtein(sequences, proteins) {
  const result = [];

  for (const [sequencesList, proteinId] of Object.entries(proteins)) {
    const seqArr = sequencesList.split(',');
    let min = Infinity;
    let max = -Infinity;
    // ['AC', 'PQ'],
    // ['AC', 'PQ', 'XY'],
    // ['BC', 'AB'],
    // ['BT', 'AC'],
    // 'P1', 'P2', 'P3', 'P4'
    for (const seq of seqArr) {
      const [start, end] = sequences[seq];
      min = Math.min(min, start);
      max = Math.max(max, end);
    }

    let isValid = true;

    for (const seq of seqArr) {
      const [start, end] = sequences[seq];

      if (start < min || end > max) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      result.push([proteinId, min, max]);
    }
  }
  console.log(result);
  return result;
}

generateProtein(sequences, proteins);

// (generate_protein) => (P1, 5, 22), (P2, 5, 35), (P3, 3, 32);
