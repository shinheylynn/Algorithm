const solution = (n, k) => {
    let answer = 0
    const converted = n.toString(k)
    const nums = converted.split('0')
    
    for (let num of nums) {
        if (num === '') continue
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