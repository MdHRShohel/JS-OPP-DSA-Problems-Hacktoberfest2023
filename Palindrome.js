/*
Question:
     Create a function that checks if a given word or phrase is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
 */
 
function isPalindrome(phrase){
    let checkPhrase = phrase.toLowerCase().replace(/ /g,"");
    let reversePharse = checkPhrase.split(''). reverse().join('');
    return checkPhrase == reversePharse;
}

console.log(isPalindrome("mom"))
