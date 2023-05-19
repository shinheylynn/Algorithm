function solution(array, n) {
    let rest = array.map(x => Math.abs(n - x));
    let min = Math.min(...rest);
    let answer = [];
    
    for (i = 0; i < rest.length; i++) {
        if (rest[i] == min) {
            answer.push(array[i])
        }
    }
    
    return Math.min(...answer)
}