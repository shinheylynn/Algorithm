function solution(my_string) {
    let arr = [...my_string];
    let answer = [];
    
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            answer.push(Number(arr[i]))
        }
    }
    return answer.sort((a,b) => a - b)
}