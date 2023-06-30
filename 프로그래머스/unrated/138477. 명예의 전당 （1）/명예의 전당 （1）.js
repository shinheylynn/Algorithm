function solution(k, score) {
    let honor = [];
    let min = [];
    
    for (i = 0; i <= score.length - 1; i++) {
        if (i < k) {
            honor.push(score[i])
        }
        if (score[i] > Math.min(...honor)) {
            console.log(honor)
            honor.pop();
            honor.push(score[i]);
            honor.sort((a, b) => b - a);
        }
        
        min.push(honor.at(-1))
    }
    
    return min
}