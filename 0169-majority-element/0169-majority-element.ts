function majorityElement(nums: number[]): number | undefined {
    const count = {}
    const half = Math.floor(nums.length / 2)

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1

        if (count[num] > half) {
            return num
        }
    }
};