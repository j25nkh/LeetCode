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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if (!root) return root;
    
    function invert(node) {
        if (node.left || node.right) {
            let temp;
            
            temp = node.right
            node.right = node.left
            node.left = temp;

           if (node.left) invert(node.left);
           if (node.right) invert(node.right);
        }
    }

    invert(root);
       
    return root;
    
};