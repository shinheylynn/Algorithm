function solution(my_string, indices) {
    let answer = [];
    indices.sort((a, b) => a - b, 0);
    
    for (i = 0; i < my_string.length; i++) {
        if (!indices.includes(i)) {
            answer.push(my_string[i])
        }
    }
    
    return answer.join("")
}