function solution(s) {
    const arr = Array.from(s);
    let answer = [];
    
    arr.forEach((x, idx) => {
        if (s.indexOf(x) === s.lastIndexOf(x)) {
            answer.push(x)
        }
    })
    
    return answer.sort().join('')
}