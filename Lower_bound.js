function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9];
const targetValue = 6;
const index = lowerBound(sortedArray, targetValue);

console.log("Lower bound index:", index);
