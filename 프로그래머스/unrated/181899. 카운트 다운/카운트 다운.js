function solution(start, end_num) {
    let answer = [];
    for (i = start; i >= end_num; i--) {
        answer.push(i)
    }
    
    return answer;
}