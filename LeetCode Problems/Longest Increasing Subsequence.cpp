//Given an integer array nums, return the length of the longest strictly increasing 
//subsequence.

//Example 1:

//Input: nums = [10,9,2,5,3,7,101,18]
//Output: 4
//Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

//Example 2:

//Input: nums = [0,1,0,3,2,3]
//Output: 4

//Example 3:

//Input: nums = [7,7,7,7,7,7,7]
//Output: 1



class Solution {
public:
    int dp[2515];
    int LIS(vector<int>& a , int i){
        if(dp[i]!=-1) return dp[i];
        int ans = 1;
        for(int j = 0 ; j<i; ++j){
            if(a[i]>a[j]){
                ans = max(ans,LIS(a,j)+1);
            }
        }
        return dp[i] = ans;
    }
    int lengthOfLIS(vector<int>& nums) {
        memset(dp , -1 , sizeof(dp));
        int ans = 0;
        for(int i = 0; i<nums.size(); ++i){
            ans = max(ans,LIS(nums,i));
        }
        return ans;
    }
};