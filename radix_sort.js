// Function to find the maximum number in an array
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to perform counting sort on the digits place
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Count occurrences of each digit in the current place
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Calculate cumulative counts
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the sorted elements back to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Main Radix Sort function
function radixSort(arr) {
  const max = getMax(arr);

  // Perform counting sort for every digit place (ones, tens, hundreds, etc.)
  for (let exp = 1; max / exp > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
}

// Example usage:
const arrayToSort = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array:", arrayToSort);
const sortedArray = radixSort(arrayToSort);
console.log("Sorted Array:", sortedArray);
