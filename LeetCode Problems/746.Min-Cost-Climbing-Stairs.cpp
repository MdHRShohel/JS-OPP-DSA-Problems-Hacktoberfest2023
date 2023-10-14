class Solution {
public:
 //SPACE OPTIMIZATION
    int solve(vector<int>&cost,int n){
   int prev1 = cost[0];
   int prev2 = cost[1];

  for(int i=2;i<n;i++){
      int curr = cost[i] + min(prev1,prev2);
      prev1 = prev2;
      prev2 = curr;
  }
     return min(prev1,prev2);

    }
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        return solve(cost,n);
    }
};