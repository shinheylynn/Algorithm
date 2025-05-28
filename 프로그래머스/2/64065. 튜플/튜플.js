function solution(s) {
    let answer = []
    const str = s.replace(/{/g, "[").replace(/}/g, "]")
    const arr = JSON.parse(str)
    
    arr
    .sort((a, b) => a.length - b.length)
    .map(item => {
        const num = item.filter(v => !answer.includes(v))
        answer.push(Number(num))
    })
    
    return answer
}