function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2]
    const half = queue.reduce((acc, cur) => acc + cur, 0) / 2
    
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    let index1 = 0
    let index2 = queue1.length
    let answer = 0
    while (answer <= queue1.length * 3) {
        if (sum1 === half) return answer
        
        if (sum1 > half) {
            sum1 -= queue[index1++]
        } else {
            sum1 += queue[index2++]
        }
        
        answer++
    }
    
    return -1
}