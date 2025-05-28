function solution(my_string, n) {
    let answer = [];
    let array = my_string.split('');
    
    for (i = 0; i < array.length; i++) {
        answer.push(array[i].repeat(n))
    }
    return answer.join('')
}