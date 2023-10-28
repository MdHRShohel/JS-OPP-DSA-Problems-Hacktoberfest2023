// Contributed by:
Name: Abhijai Rajawat
University: VIT, Vellore

// Problem Statement:
Given a string s, return the longest 
palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

// Problem Solution:
var check = function(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var longestPalindrome = function(s) {
    const n = s.length;
    let starting_index = 0;
    let max_len = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (check(s, i, j)) {
                if (j - i + 1 > max_len) {
                    max_len = j - i + 1;
                    starting_index = i;
                }
            }
        }
    }
    return s.substring(starting_index, starting_index + max_len);
}
