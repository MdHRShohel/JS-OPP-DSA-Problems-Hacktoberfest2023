//"Order agnostic" is a term used to describe a situation where the arrangement or sequence of items or elements does not matter.
public class binarySearchOrderAgnostic {

  // This function performs a binary search on an order-agnostic array
  static int binarySearchOrderAgnosticAlgo(int[] arr, int target) {
    int startIndex = 0;
    int endIndex = arr.length - 1;

    // Determine whether the array is in ascending or descending order
    boolean isAsc = (arr[startIndex] < arr[endIndex]);

    while (startIndex <= endIndex) {
      int middleIndex = startIndex + (endIndex - startIndex) / 2;

      if (arr[middleIndex] == target) {
        return middleIndex;  // If the target is found, return its index
      }

      if (isAsc) {
        // If the array is in ascending order, perform binary search accordingly
        if (target > arr[middleIndex]) {
          startIndex = middleIndex + 1;
        } else if (target < arr[middleIndex]) {
          endIndex = middleIndex - 1;
        }
      } else {
        // If the array is in descending order, perform binary search accordingly
        if (target < arr[middleIndex]) {
          startIndex = middleIndex + 1;
        } else if (target > arr[middleIndex]) {
          endIndex = middleIndex - 1;
        }
      }
    }
    return -1;  // If the target is not found, return -1
  }

  public static void main(String[] args) {
    int[] arrAsc = {-343, 1, 2, 3, 4, 5, 6, 7, 8, 9, 54}; // Ascending Array
    int[] arrDes = {32323, 2342, 453, 54, 32, 2, -32, -534, -5462};  // Descending Array

    // Test the binarySearchOrderAgnosticAlgo function with both ascending and descending arrays
    System.out.println(binarySearchOrderAgnosticAlgo(arrAsc, 8)); // Output: 8 (index of 8 in the ascending array)
    System.out.println(binarySearchOrderAgnosticAlgo(arrDes, 2)); // Output: 5 (index of 2 in the descending array)
  }
}
