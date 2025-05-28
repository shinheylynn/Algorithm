function solution(n) {
    let arr = String(n).split("");
    
    return arr.reduce((acc, cur) => {
        return Number(acc) + Number(cur)
    }, 0)
}