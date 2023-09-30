function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively merge sort both halves
  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  // Merge the two sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them into the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in either the left or right array, add them to the result
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [8, 3, 9, 4, 6, 2, 7, 5, 1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
