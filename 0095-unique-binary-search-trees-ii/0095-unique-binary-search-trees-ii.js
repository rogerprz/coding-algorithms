/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    // NOT MY SOLUTION
    if (n === 0) return []

    const buildTrees = (start, end) => {
        if (start> end) return [null]

        const allTrees = []

        for (let i = start; i<=end; i++) {
            const leftTrees = buildTrees(start, i - 1)
            const rightTrees = buildTrees(i+1, end)

            for (let l of leftTrees) {
                for (const r of rightTrees) {
                    const currentTree = new TreeNode(i)

                    currentTree.left = l
                    currentTree.right = r

                    allTrees.push(currentTree)
                }
            }
        }
        return allTrees
    }

    return buildTrees(1, n)
};