const union = (nums1, nums2) => {
    return [...new Set(nums1.concat(nums2))]
}

console.log(union([1,2,3,4], [3,4,5,6]));