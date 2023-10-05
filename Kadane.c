#include <stdio.h>
const int INT_MIN = -1e9;
int maximumSubarraySum(int arr[], int n) {
 int maxSum = INT_MIN;
 int i=0;
 for(; i <= n - 1; i++) {
   int currSum = 0;
   int j=i;
   for (; j <= n - 1; j++) {
     currSum += arr[j];
     if (currSum > maxSum) {
       maxSum = currSum;
     }
   }
 }
 
 return maxSum;
 
}
int main() {
   // Your code goes here
   int a[] = {1, 3, 8, -2, 6, -8, 5};
   printf("%d", maximumSubarraySum(a, 7));
   return 0;
}
