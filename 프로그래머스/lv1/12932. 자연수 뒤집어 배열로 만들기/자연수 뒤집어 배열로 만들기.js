function solution(n) {    
    let arr = [...(n+"")];
    let answer = [];
    
    for (i=arr.length-1; i>=0; i--) {
        answer.push(arr[i]);
    };
    return answer.map(i=>Number(i));
}