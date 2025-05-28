function solution(s) {
    let answer = []
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    
    arr
    .sort((a, b) => a.length - b.length)
    .map(item => {
        const num = item.filter(v => !answer.includes(v))
        answer.push(Number(num))
    })
    
    return answer
}