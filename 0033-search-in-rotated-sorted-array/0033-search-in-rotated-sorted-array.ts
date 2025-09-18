function search(nums: number[], target: number): number {
    if (nums.includes(target)) return nums.indexOf(target)
    return -1
};