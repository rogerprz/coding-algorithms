/**
 * @param {number[][]} adjacentadjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const hash = {}

    for (let i = 0; i < adjacentPairs.length; i++) {
        const first = adjacentPairs[i][0]
        const sec = adjacentPairs[i][1]
        if (!(first in hash)) hash[first] = []
        if (!(sec in hash)) hash[sec] = []

        hash[first].push(sec)
        hash[sec].push(first)
    }

    let result = []

    for (const [node, neighbors] of Object.entries(hash)) {
        if (neighbors.length === 1) {
            result = [parseInt(node), neighbors[0]]
            break;
        }
    }
    console.log("R:", result)
     while (result.length < adjacentPairs.length + 1) {
        const last = result[result.length - 1]
        const prev = result[result.length - 2]

        const candidates = hash[last]
        const nextElement = candidates[0] !== prev ? candidates[0] : candidates[1];
        result.push(nextElement);
    }

    return result
};