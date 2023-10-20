function solution(arr, n) {
    let answer = [];
    
    if (arr.length % 2 == 0) {
        arr.map((x,idx) => {
            if (idx % 2 != 0) { 
                answer.push(arr[idx] + n) 
            } else answer.push(arr[idx])
        })
    } else {
        arr.map((x,idx) => {
            if (idx % 2 == 0) { 
                answer.push(arr[idx] + n) 
            } else answer.push(arr[idx])
        })
    }
    
    return answer;
}