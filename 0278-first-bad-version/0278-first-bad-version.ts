/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
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