function solution(sides) {
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let maxIsMax = []
    let IamMax = []
    
    for (let i = max - min + 1; i < max; i++) {
        maxIsMax.push(i)
    }
    for (let j = max + min - 1; j > max; j--) {
        IamMax.push(j)
    }
    
    return maxIsMax.length + IamMax.length + 1
}