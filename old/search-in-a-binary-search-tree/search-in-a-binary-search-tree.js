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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return root
    if (root.val === val) return root

    let node = null
    if (val< root.val) node = searchBST(root.left, val)
    else node = searchBST(root.right, val)

    return node
};