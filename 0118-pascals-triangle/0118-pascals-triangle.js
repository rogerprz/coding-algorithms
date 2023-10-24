/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     const triangle = [];

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        // The first and last row elements are always 1.
        const row = Array(rowNum + 1).fill(null);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[rowNum - 1][j - 1] + triangle[rowNum - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
};