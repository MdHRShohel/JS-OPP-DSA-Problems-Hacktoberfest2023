/*
2635. Apply Transform Over Each Element in Array
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
Link to the question: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 */
var map = function(arr, fn) {
    for(let i = 0; i<arr.length;++i){
        arr[i] = fn(arr[i],i)
    }
    return arr;
};