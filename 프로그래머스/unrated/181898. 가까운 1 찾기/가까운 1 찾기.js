function solution(arr, idx) {
    let answer = -1;
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && i >= idx) {
            answer = i;
            return answer
        }
    }
    
    return answer
}