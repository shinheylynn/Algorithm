function solution(my_string, m, c) {
    let answer = [];
    let arr = [];
    
    for (let i = 0; i <= [...my_string].length; i += m) {
        arr.push([...my_string].slice(i, i + m))
    };
    
    for (let j = 0; j < arr.length - 1; j++) {
        answer.push(arr[j][c - 1])
    };
    
    
    return answer.join('')
}