function solution(arr) {
    let answer = [];
    arr.forEach(x => {
        if (x >= 50 && x % 2 == 0) {
            answer.push(x / 2)
        } else if (x < 50 && x % 2 == 1) {
            answer.push(x * 2)
        } else {
            answer.push(x)
        }
    })
    
    return answer;
}