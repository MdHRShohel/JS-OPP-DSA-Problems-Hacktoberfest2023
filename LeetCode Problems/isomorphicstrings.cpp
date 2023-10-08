#include<iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;
int speed_up = []{
    ios::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    return 0;
}();
class Solution {
public:
    bool valueFinder(unordered_map<char,char>&mp, char value)
    {
        if(mp.size()==0)
           return false;
        for(auto it=mp.begin();it!=mp.end();++it)
        {
            if(it->second==value)
               return true;
        }
        return false;
    }
    bool isIsomorphic(string s, string t) 
    {
        unordered_map<char,char>mp;
        for(int i=0;i<s.size();i++)
        {
            if(mp.find(s[i])==mp.end())
             {
                 if(valueFinder(mp,t[i]))
                        return false;
                 mp[s[i]]=t[i];
             }
            else
            {
                if(mp[s[i]]==t[i])
                  continue;
                else
                   return false;
            }
        }
        return true;
    }
};