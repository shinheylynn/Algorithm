function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((a, i) => {
        return a.map((x, idx) => idx === i ? 1 : x)
    })
}