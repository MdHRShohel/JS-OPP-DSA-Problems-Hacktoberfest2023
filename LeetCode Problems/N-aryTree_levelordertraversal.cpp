class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        queue<Node*>q;
        vector<vector<int>>v;
        if(root!=NULL)
            q.push(root);
        while(!q.empty())
        {
            int k=q.size();
            vector<int>g;
            for(int i=0;i<k;i++)
            {
                Node* node=q.front();
                // if(node->!=NULL)
                //     q.push(node->left);
                // if(node->right!=NULL)
                //     q.push(node->right);
                vector<Node*>k=node->children;
                for(auto x:k)
                {
                    q.push(x);
                }
                g.push_back(node->val);
                q.pop();
            }
            if(g.size()>0)
                v.push_back(g);
        }
        return v;
    }
};
