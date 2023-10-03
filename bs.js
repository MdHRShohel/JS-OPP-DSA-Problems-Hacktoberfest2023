function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Adjust the left bound
        } else {
            right = mid - 1; // Adjust the right bound
        }
    }

    return -1; // Element not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetElement = 7;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
