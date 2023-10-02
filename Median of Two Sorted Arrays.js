// Description: This algorithm finds the median of two sorted arrays.

var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [];

    const merge = (arr1, arr2) => {
        while (arr1.length && arr2.length) {
            if (arr1[0] < arr2[0]) {
                nums.push(arr1.shift());
            } else {
                nums.push(arr2.shift());
            }
        }

        nums = [...nums, ...arr1, ...arr2];
        return nums;
    }

    merge(nums1, nums2);
    if (nums.length % 2 == 1) return nums[Math.floor(nums.length / 2)];
    else {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            left++;
            right--;
        }

        return (nums[left] + nums[right]) / 2;
    }
};

console.log(findMedianSortedArrays([1,3], [2])); // 2
console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5