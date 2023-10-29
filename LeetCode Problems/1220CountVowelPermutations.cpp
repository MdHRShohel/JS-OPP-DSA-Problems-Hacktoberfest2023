#include<bits/stdc++.h>
using namespace std;
class Solution {
    private:
    int mod = 1e9 + 7;
    int solve(int ind,int last,vector<vector<int>>&dp){
        if(ind == 0) return 1;
        if(dp[ind][last]!=-1) return dp[ind][last];
        long long ans = 0;
        switch(last){
            case 0:
                for(int vowel=1;vowel<=5;vowel++) ans+=solve(ind-1,vowel,dp);
                break;
            case 1:
                ans +=solve(ind-1,2,dp);
                break;
            case 2:
                ans +=solve(ind-1,1,dp);
                ans +=solve(ind-1,3,dp);
                break;
            case 3:
                for(int vowel=1;vowel<=5;vowel++) 
                    if(vowel!=3){
                        ans+=solve(ind-1,vowel,dp);
                    }
                break;
            case 4: 
                ans +=solve(ind-1,3,dp);
                ans +=solve(ind-1,5,dp);
                break;                  
            case 5:
                ans +=solve(ind-1,1,dp);
                break;
        }
        
        return dp[ind][last] = ans % mod;
    }
public:
    int countVowelPermutation(int n) {
        vector<vector<int>>dp(n+1,vector<int>(6,-1));
        return solve(n,0,dp);
    }
};

int main(){
    Solution obj;
    int input; cin>>input;
    
    cout<<obj.countVowelPermutation(input)<<endl;
    return 0;
}