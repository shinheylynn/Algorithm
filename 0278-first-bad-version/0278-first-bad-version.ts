var solution = function(isBadVersion: any) {
  const func = function(n: number, min = 1, max = n): number {
    if (min === max) return min

    const mid = Math.floor((min + max) / 2)
    if (isBadVersion(mid)) {
        return func(n, min, mid)
    }
    return func(n, mid + 1, max)
  }
  return func
}