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

    const buildTrees = (start, end, memo= {}) => {
        if (`${start}-${end}` in memo) return memo[`${start}-${end}`]
        const allTrees = []
        if (start> end) {
            allTrees.push(null)
            return allTrees
        }

        for (let i = start; i<=end; i++) {
            const leftTrees = buildTrees(start, i - 1)
            const rightTrees = buildTrees(i+1, end)

            for (let leftNode of leftTrees) {
                for (const rightNode of rightTrees) {
                    const root = new TreeNode(i, leftNode, rightNode)
                    allTrees.push(root)
                }
            }
        }

        memo[`${start}-${end}`] = allTrees;
        return allTrees
    }

    return buildTrees(1, n)
};