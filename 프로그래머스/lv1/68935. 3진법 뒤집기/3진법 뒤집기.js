function solution(n) {
    let number = [];
    let sum = 0;
    
    while (n >= 3) {
        number.push(Math.floor(n % 3));
        n = n / 3
    }
    number.push(Math.floor(n));
    
    const reversed = number.reverse();
    
    for (i = 0; i < number.length; i++) {
        sum += reversed[i] * Math.pow(3, i)
    }
    
    return sum;
}