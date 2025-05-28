function solution(absolutes, signs) {
    let answer = [];
    
    for (i = 0; i <= signs.length - 1; i++) {
        if (signs[i] == true) {
            answer.push(absolutes[i])
        } else {
            answer.push(-absolutes[i])
        }
    }
    
    return answer.reduce((a, b) => a + b, 0)
}