function findProteins(genes) {
  const result = [];
  const hash = new Map();

  // Sort genes by start index
  genes.sort((a, b) => a[1] - b[1]);

  for (const [name, startIndex, endIndex] of genes) {
    let proteinName = name;
    let proteinStart = startIndex;
    let proteinEnd = endIndex;

    // Check if there are previous genes to concatenate
    for (const [prevName, prevStart, prevEnd] of hash.values()) {
      if (startIndex === prevEnd + 1) {
        // Concatenate gene names
        proteinName = `${prevName}_${name}`;
        proteinStart = prevStart;
        // Update protein end index
        proteinEnd = endIndex;
        // Remove the previous entry from the map
        hash.delete(prevName);
        break;
      }
    }

    // Update hash with new protein
    hash.set(proteinName, [proteinName, proteinStart, proteinEnd]);

    // Add the protein to the result
    result.push({ name: proteinName, startIndex: proteinStart, endIndex: proteinEnd });
  }

  return result;
}

// Test case
const exampleGenes = [
  ['DBZ', 0, 7],
  ['cryNow', 7, 16],
  ['bro2', 7, 22],
  ['PEPPY', 4, 11],
  ['DBZ', 15, 22],
  ['cr8', 11, 22],
  ['PS', 22, 28]
];

const expectedResult = [
  { name: 'DBZ', startIndex: 0, endIndex: 7 },
  { name: 'cryNow', startIndex: 7, endIndex: 16 },
  { name: 'PEPPY', startIndex: 4, endIndex: 11 },
  { name: 'DBZ', startIndex: 15, endIndex: 22 },
  { name: 'bro2', startIndex: 7, endIndex: 22 },
  { name: 'cr8', startIndex: 11, endIndex: 22 },
  { name: 'PS', startIndex: 22, endIndex: 28 },
  { name: 'DBZ_cryNow', startIndex: 0, endIndex: 16 },
  { name: 'PEPPY_cr8', startIndex: 4, endIndex: 22 },
  { name: 'PEPPY_cr8_PS', startIndex: 4, endIndex: 28 },
  { name: 'cr8_PS', startIndex: 11, endIndex: 28 },
  { name: 'DBZ_PS', startIndex: 15, endIndex: 28 },
  { name: 'DBZ_bro2', startIndex: 0, endIndex: 22 },
  { name: 'DBZ_bro2_PS', startIndex: 0, endIndex: 28 },
  { name: 'bro2_PS', startIndex: 7, endIndex: 28 }
];

console.log(findProteins(exampleGenes));
