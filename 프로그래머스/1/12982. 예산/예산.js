function solution(d, budget) {
    let arr = d.sort((a, b) => a - b, 0);
    let cost = 0
    let answer = [];
    
    for (i = 0; cost <= budget; i++) {
        cost += arr[i];
        answer.push(arr[i]);
    }
    
    return answer.length - 1
}