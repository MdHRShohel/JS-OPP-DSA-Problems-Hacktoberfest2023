// 1425. Constrained Subsequence Sum
//https://leetcode.com/problems/constrained-subsequence-sum/?envType=daily-question&envId=2023-10-21

#include <vector>
#include <deque>
#include <algorithm>

class Solution {
public:
    int constrainedSubsetSum(std::vector<int>& nums, int k) {
        std::deque<int> dq;
        for (int i = 0; i < nums.size(); ++i) {
            nums[i] += !dq.empty() ? nums[dq.front()] : 0;
            
            while (!dq.empty() && (i - dq.front() >= k || nums[i] >= nums[dq.back()])) {
                if (nums[i] >= nums[dq.back()]) dq.pop_back();
                else dq.pop_front();
            }
            
            if (nums[i] > 0) {
                dq.push_back(i);
            }
        }
        return *std::max_element(nums.begin(), nums.end());
    }
};
