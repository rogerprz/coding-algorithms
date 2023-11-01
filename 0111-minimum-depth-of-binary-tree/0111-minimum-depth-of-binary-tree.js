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
var minDepth = function(root) {
    if (!root) return 0

    if (!root.left) return 1 + minDepth(root.right)
    else if (!root.right) return 1 + minDepth(root.left)
    // const leftNodes = minDepth(root.left, count++ )
    // const rightNodes = minDepth(root.right, count++)

    // console.log('L:', leftNodes, 'R:', rightNodes, count)
    return 1+ Math.min(minDepth(root.left), minDepth(root.right))
};

    //     2,
    // null,   3,
    //     null,   4,
    //         null,   5,
    //             null,   6]