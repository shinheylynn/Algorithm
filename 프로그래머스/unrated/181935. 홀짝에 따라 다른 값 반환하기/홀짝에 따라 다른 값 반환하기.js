function solution(n) {
    let answer = 0;
    
    for (i = 0; i <= n; i++) {
        if (n % 2 == 0 && i % 2 == 0) {
            answer += i*i
        } else if (n % 2 != 0 && i % 2 != 0) {
            answer += i
        }   
    }
    
    return answer
}