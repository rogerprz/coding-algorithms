/* eslint-disable object-shorthand */

// eslint-disable-next-line no-unused-vars
const expectedResult = [
  { name: 'DBZ', startIndex: 0, endIndex: 7 },
  { name: 'bro2', startIndex: 7, endIndex: 22 },
  { name: 'DBZ_bro2_PS', startIndex: 0, endIndex: 28 },
  { name: 'DBZ_bro2', startIndex: 0, endIndex: 22 },
  { name: 'DBZ_cryNow', startIndex: 0, endIndex: 16 },
  { name: 'DBZ_PS', startIndex: 15, endIndex: 28 },
  { name: 'DBZ', startIndex: 15, endIndex: 22 },
  { name: 'bro2_PS', startIndex: 7, endIndex: 28 },
  { name: 'cr8_PS', startIndex: 11, endIndex: 28 },
  { name: 'cr8', startIndex: 11, endIndex: 22 },
  { name: 'cryNow', startIndex: 7, endIndex: 16 },
  { name: 'PEPPY_cr8_PS', startIndex: 4, endIndex: 28 },
  { name: 'PEPPY_cr8', startIndex: 4, endIndex: 22 },
  { name: 'PEPPY', startIndex: 4, endIndex: 11 },
  { name: 'PS', startIndex: 22, endIndex: 28 }
];

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

function findProteins(genes) {
  const result = [];
  const hash = {};

  genes.sort((a, b) => a[1] - b[1]);

  for (const [currentName, startIndex, endIndex] of genes) {
    result.push({ name: currentName, startIndex, endIndex });
    hash[currentName] = [currentName, startIndex, endIndex];

    for (const [prevName, prevStart, prevEnd] of Object.values(hash)) {
      if (startIndex === prevEnd) {
        const newName = `${prevName}_${currentName}`;

        const newStartIndex = prevStart < startIndex ? prevStart : startIndex;

        result.push({ name: newName, startIndex: newStartIndex, endIndex: endIndex });
        hash[newName] = [newName, newStartIndex, endIndex];
      }
    }
  }
  return result;
}

const result = findProteins(exampleGenes);
console.log(
  'RES:',
  result.sort((a, b) => a.name.localeCompare(b.name)),
  'EX:',
  expectedResult.sort((a, b) => a.name.localeCompare(b.name))
);
console.log(
  JSON.stringify(result.sort((a, b) => a.name.localeCompare(b.name))) ===
    JSON.stringify(expectedResult.sort((a, b) => a.name.localeCompare(b.name)))
);
