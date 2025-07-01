function solution(n, t, m, p) {
    let answer = []
    const arrN = Array(t * m).fill(0).map((_, i) => i.toString(n).toUpperCase())
    const nums = arrN.map(n => n.split('')).flat()

    nums.forEach((n, idx) => {
        if (idx % m === (p - 1)) {
            answer.push(n)
        }
    })
    
    return answer.splice(0, t).join('')
}