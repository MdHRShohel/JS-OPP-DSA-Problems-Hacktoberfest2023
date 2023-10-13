// 367. Valid Perfect Square
/* Given a positive integer num, return true if num is a perfect square or false otherwise.
A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
You must not use any built-in library function, such as sqrt. */
// https://leetcode.com/problems/valid-perfect-square/

var isPerfectSquare = function(num) {
    for(let i = 1; i <= num; i++)
    {
      if(i * i === num) return true;
      if(i * i > num) return false;
    }
};
