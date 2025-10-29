function majorityElement(nums: number[]): number[] {
  const count: Record<number, number> = {} 
  const third = Math.floor(nums.length / 3)
  const answer = new Set<number>() 

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1

    if (count[num] > third) {
      answer.add(num)
    }
  }

  return Array.from(answer)
}