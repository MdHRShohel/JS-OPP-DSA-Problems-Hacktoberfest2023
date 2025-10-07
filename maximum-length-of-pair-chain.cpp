class Solution {
public:

    static bool cmp(const vector<int> &a, const vector<int> &b) {
        if(a[0] != b[0]) return a[0] < b[0];
        return a[1] < b[1];
    }

    int findLongestChain(vector<vector<int>>& pairs) {
        int sz= pairs.size();
        sort(pairs.begin(), pairs.end(), cmp);
        vector<int> dp;
        for(auto &p: pairs){
            int x = p[0], y = p[1];
            if (dp.empty() || dp.back() < x) {
                dp.push_back(y);
            } else{
                int idx = lower_bound(dp.begin(), dp.end(), x) - dp.begin();
                dp[idx] = min(dp[idx], y);
            }
        }
        return dp.size();
    }
};
