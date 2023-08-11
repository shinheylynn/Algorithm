function solution(n, control) {
    let arr = control.split("");
    
    arr.forEach(x => {
        if (x == "w") {
            n += 1
        } else if (x == "s") {
            n -= 1
        } else if (x == "d") {
            n += 10
        } else {
            n -= 10
        }
    })
    
    return n
}