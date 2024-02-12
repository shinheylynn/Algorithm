function solution(arr) {
    let i = 0;
    const stk = [];
    
    do {
        if (stk.length === 0) {
            stk.push(arr[i])
            i += 1
        } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i])
            i += 1
        } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
            stk.pop()
        }
    }
    while (i < arr.length) 
    
    return stk;
}