class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function buildBSTFromPreorder(preorder) {
    if (preorder.length === 0) {
        return null;
    }

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    let i;
    for (i = 1; i < preorder.length; i++) {
        if (preorder[i] > rootVal) {
            break;
        }
    }

    root.left = buildBSTFromPreorder(preorder.slice(1, i));
    root.right = buildBSTFromPreorder(preorder.slice(i));

    return root;
}

function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left);
        console.log(node.val);
        inorderTraversal(node.right);
    }
}

const preorder = [10, 5, 1, 7, 40, 50];
const root = buildBSTFromPreorder(preorder);
inorderTraversal(root);
