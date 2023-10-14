// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 */

var firstUniqChar = function(s) {
    let occurence = {}, index;
    s.split('').forEach((char) => {
        (occurence.hasOwnProperty(char) === false) ? occurence[char] = 1 : occurence[char]++;
    })

    for(const k of Object.keys(occurence))
    {
        if(occurence[k] == 1)
        {
            index = s.indexOf(k);
            break;
        }
    }
    return index >= 0 ? index : -1;
};