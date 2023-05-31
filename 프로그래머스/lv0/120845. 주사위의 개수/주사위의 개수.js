function solution(box, n) {
    let answer = [];
    
    box.map(x => {
        answer.push(parseInt(x / n))
    })
    
    return answer.reduce((acc, cur) => acc * cur, 1)
}