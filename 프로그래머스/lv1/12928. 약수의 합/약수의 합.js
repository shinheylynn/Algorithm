function solution(n) {
    arr = [];
    result = 0;
    
    for (i=1; i<=n; i++) {
        if (n % i == 0) arr.push(i)
    }
    result = arr.reduce((idx,n)=> {return idx+n}, 0)
    return result
}