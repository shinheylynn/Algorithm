function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) return i
        if (nums[nums.length - 1] < target) return nums.length
    }
};