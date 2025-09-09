/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        if (n === 1) return 1

        let min = 0
        let max = n

        while (min < max) {
            const mid = Math.floor((min + max) / 2)
            if (isBadVersion(mid)) {
                max = mid
            } else {
                min = mid + 1
            }
        }
        return max
    };
};