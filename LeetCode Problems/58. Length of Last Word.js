// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/description/
/* Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
 */

var lengthOfLastWord = function (s) {

    let charOccurrence = false,
        lenOfLastWord = 0;

    for (let index = s.length - 1; index >= 0; index--) {
        if (s[index] != " ") {
            charOccurrence = true;
            lenOfLastWord++;
        }

        if (s[index] == " " && charOccurrence) {
            break;
        }
    }

    return lenOfLastWord;
};