function solution(array) {
    let answer = [];
    let max = Math.max(...array);
    
    for (i = 0; i < array.length; i++) {
        if (max === array[i]) {
            answer.push(max);
            answer.push(i);
        }
    }
    
    return answer;
}