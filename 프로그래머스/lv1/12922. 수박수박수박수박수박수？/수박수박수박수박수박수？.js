function solution(n) {
    let answer = [];
    
    for (i = 0; i < n; i++) {
        if (i % 2 == 0) {
            answer[i] = "수"
        } else if (i % 2 == 1) {
            answer[i] = "박"
        } else if (i = 0) {
            answer[i] = "수"
        }
    }
    
    return answer.join("")
}