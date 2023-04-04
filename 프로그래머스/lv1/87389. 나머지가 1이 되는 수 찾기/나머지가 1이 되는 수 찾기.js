function solution(n) {
    let arr = [];
    
    for (i=0; i<=n; i++) {
        if (n % i == 1) {
            arr.push(i)
        }
    }
    return Math.min(...arr)
}