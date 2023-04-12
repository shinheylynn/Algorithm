function solution(phone_number) {
    let answer = [...phone_number];
    
    for (i = 0; i <= answer.length - 5; i++) {
        answer[i] = "*";
    }
    
    return answer.join('')
}