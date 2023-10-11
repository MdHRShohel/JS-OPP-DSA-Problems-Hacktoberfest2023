// Problem-link-https://leetcode.com/problems/valid-parentheses/description/

#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool isValid(string s)
    {
        stack<char> st;
        for (auto x : s)
        {
            if (x == '{' || x == '[' or x == '(')
            {
                st.push(x);
            }
            else if (st.size() > 0)
            {
                if (x == '}' and st.top() == '{')
                {
                    st.pop();
                }
                else if (x == ']' and st.top() == '[')
                {
                    st.pop();
                }
                else if (x == ')' and st.top() == '(')
                {
                    st.pop();
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        return st.empty();
    }
};