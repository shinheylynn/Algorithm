function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    let count = 0;
    for (i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++
        }
    }
    
    return count
}