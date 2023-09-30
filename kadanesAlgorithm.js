function kadanesAlgorithm(arr) {
  let maxEndingHere = arr[0]; // Initialize the maximum subarray sum ending at the current index
  let maxSoFar = arr[0]; // Initialize the maximum subarray sum found so far

  for (let i = 1; i < arr.length; i++) {
    // Calculate the maximum subarray sum ending at the current index
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

    // Update the maximum subarray sum found so far
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = kadanesAlgorithm(arr);
console.log("Maximum subarray sum:", maxSubarraySum); // Output: 6
