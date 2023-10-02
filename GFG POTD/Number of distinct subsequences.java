class Solution {
    int distinctSubsequences(String S) {
        int mod = (int)(1e9+7);
        int n=S.length();
        int[] dp = new int[n+1];
        int[] vis = new int[26];
        Arrays.fill(vis, -1);
        dp[0]=1;
        for(int i=1; i<=n; i++){
            dp[i]=(2*dp[i-1])%mod;
            int idx = S.charAt(i-1)-'a';
            if(vis[idx]!=-1){
                dp[i]=(dp[i]-dp[vis[idx]-1]+mod)%mod;
            }
            vis[idx]=i;
        }
        return dp[n];
    }
}