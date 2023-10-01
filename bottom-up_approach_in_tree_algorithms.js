class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfTree(root) {
  if (root === null) {
    return 0;
  }

  const leftSum = sumOfTree(root.left);
  const rightSum = sumOfTree(root.right);

  return root.val + leftSum + rightSum;
}

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const treeSum = sumOfTree(root);
console.log("Sum of tree values:", treeSum); // Output: Sum of tree values: 15
