function solution(nums) {
    addNums = [];
    ans = 0;
    
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            for (k = j + 1; k < nums.length; k++) {
                addNums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    addNums.forEach(num => {
        let isSosu = true;
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isSosu = false;
            }
        }
        ans += (isSosu ? 1 : 0)
    })
    
    return ans;
}