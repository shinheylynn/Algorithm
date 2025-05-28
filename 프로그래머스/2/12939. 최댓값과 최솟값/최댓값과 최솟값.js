function solution(s) {
    let answer = []
    const arr = s.split(' ').map(i => Number(i))
    
    answer.push(Math.min(...arr))
    answer.push(Math.max(...arr))
    
    return String(answer).replace(',', ' ')
}