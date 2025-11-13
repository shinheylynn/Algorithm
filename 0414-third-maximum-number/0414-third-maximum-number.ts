function thirdMax(nums: number[]): number {
    const set = new Set(nums)

    if (set.size < 3) {
        return Math.max(...nums)
    }
    const sorted = Array.from(set).sort((a, b) => b - a)

    return sorted[2]
};