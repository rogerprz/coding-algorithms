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

  // genes.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < genes.length; i++) {
    const [currentName, startIndex, endIndex] = genes[i];
    result.push({ name: currentName, startIndex, endIndex });
    hash[currentName] = [currentName, startIndex, endIndex];

    const hashArr = Object.values(hash);
    for (let j = 0; j < hashArr.length; j++) {
      const [prevName, prevStart, prevEnd] = hashArr[j];

      if (startIndex === prevEnd) {
        const newName = `${prevName}_${currentName}`;

        result.push({ name: newName, startIndex: prevStart, endIndex: endIndex });
        hash[newName] = [newName, startIndex, endIndex];
      }
    }
  }
  return result;
}

const result = findProteins(exampleGenes);
console.log(result);
console.log(result.length === expectedResult.length); // Output: true
