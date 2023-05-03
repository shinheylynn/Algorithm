function solution(numbers) {
    let arr = [];
    
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    
    let answer = arr.filter((x, idx) => arr.indexOf(x) == idx);
    
    return answer.sort((a, b) => a - b);
}