// The quicksort algorithm in JavaScript typically has an average time complexity of
// O(n log n), where "n" is the number of elements to be sorted. It is often preferred
// for sorting large datasets because of its efficient average-case performance.
// QuickSort works by dividing the array into smaller subarrays, sorting them, and
// combining them back together. This divide-and-conquer approach is well-suited for
// large datasets, making it faster than some other sorting algorithms in practice.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [10, 42, 47, 31, 34, 68, 93, 28, 38, 8, 61];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);
