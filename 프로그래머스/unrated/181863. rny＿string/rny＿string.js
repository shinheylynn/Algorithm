function solution(rny_string) {
    let arr = [...rny_string]
    
    arr.forEach((x, idx) => {
        if (x == "m") {
            arr[idx] = "rn"
        }
    })
    
    return arr.join('')
}