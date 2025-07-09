const solution = (n, k) => {
    let answer = 0
    const nums = n.toString(k).split('0')
    
    for (let num of nums) {
        if (isPrime(Number(num))) {
            answer++
        }
    }
    
    return answer
}

const isPrime = (n) => {
    if (n < 2) return false
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }

    return true
}