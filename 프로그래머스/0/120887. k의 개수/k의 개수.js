function solution(i, j, k) {
    let nums = [];
    let answer = 0;
    
    for (a = i; a <= j; a++) {
        nums.push(a);
    };
    
    let split = nums.join('').split('');
    
    split.forEach(x => {
        if (x == k) {
            answer++
        }
    })
    
    return answer
}