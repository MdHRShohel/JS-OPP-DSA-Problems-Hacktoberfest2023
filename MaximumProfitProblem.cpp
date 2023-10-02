//Question Link --> https://practice.geeksforgeeks.org/problems/maximum-profit4657/1?page=3&difficulty[]=2&sortBy=submissions
class Solution {
  public:
    int dp[501][2][201];
    int solve(int idx,int buy,int k,int n,int arr[]){
      //Base Cases
        if(k == 0) return 0;
        if(idx == n-1 && !buy) return 0;
        if(idx == n-1) return arr[idx];
        
        if(dp[idx][buy][k] != -1) return dp[idx][buy][k];
        
        if(!buy)
            return dp[idx][buy][k] = max(solve(idx+1,buy,k,n,arr),-arr[idx] + solve(idx+1,!buy,k,n,arr));

        return dp[idx][buy][k] = max(solve(idx+1,buy,k,n,arr), arr[idx] + solve(idx+1,!buy,k-1,n,arr));
    }
    int maxProfit(int K, int N, int A[]) {
        memset(dp,-1,sizeof(dp));
        return solve(0,0,K,N,A);
    }
};
