function fillPrefixSum(arr) {
    const prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
}

// Driver Code
const arr = [10, 4, 16, 20];
const prefixSum = fillPrefixSum(arr);

for (let i = 0; i < prefixSum.length; i++) {
    console.log(prefixSum[i] + " ");
}
