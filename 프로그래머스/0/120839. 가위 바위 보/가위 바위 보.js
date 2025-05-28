function solution(rsp) {
    let arr = [...rsp];
    let answer = [];
    
    arr.map(x => {
        if (x === "2") {
            answer.push("0")
        } else if (x === "0") {
            answer.push("5")
        } else { 
            answer.push("2")
        }
    })
    
    return answer.join('')
}