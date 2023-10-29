/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0

    const determineMaxDepth = (node)=> {

        if (!node) return 0 

        const leftMaxDepth = determineMaxDepth(node.left)
        const rightMaxDepth = determineMaxDepth(node.right)

        return Math.max(leftMaxDepth, rightMaxDepth)+1
    }
    return determineMaxDepth(root)
};