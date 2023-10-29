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
    if (!root) return root

    const maxDepthLeft = maxDepth(root.left)
    const maxDepthRight = maxDepth(root.right)

    return Math.max(maxDepthLeft, maxDepthRight) + 1
};