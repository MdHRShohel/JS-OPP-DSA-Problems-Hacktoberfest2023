class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
        vector<vector<string>> ans;
        unordered_map<string, vector<string>> mpp;
        
        for(auto str : strs)
        {
            string s = str;
            sort(s.begin(),s.end());
            mpp[s].push_back(str);
        }
        
        for(auto value : mpp)
        {
            ans.push_back(value.second);
        }
        
        return ans;
    }
};
