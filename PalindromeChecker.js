function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

let checkResult = isPalindrome("A man, a plan, a canal, Panama"); // Example usage
console.log(checkResult); // Output: true
