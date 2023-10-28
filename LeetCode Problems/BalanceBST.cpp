/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    
    void inorder(TreeNode* root, vector<int> &in)
    {
        if(root==NULL)
            return;
        
        inorder(root->left, in);
        in.push_back(root->val);
        inorder(root->right, in);
    }
    
    TreeNode* balance(vector<int> inorderVal, int left, int right)
    {
        if(left>right)
            return NULL;
        
        int mid=(left+right)/2;
        
        TreeNode *newRoot=new TreeNode(inorderVal[mid]);
        
        newRoot->left=balance(inorderVal, left, mid-1);
        newRoot->right=balance(inorderVal, mid+1, right);
        
        return newRoot;
        
    }
    
    TreeNode* balanceBST(TreeNode* root) {
        
        vector<int> inorderVal;
        inorder(root, inorderVal);
        
        return balance(inorderVal, 0, inorderVal.size()-1);
        
    }
};
