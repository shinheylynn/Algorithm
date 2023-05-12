function solution(numbers) {
    let arr = [];
    
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j ++) {
            arr.push(numbers[i] * numbers[j])
        }
    }
    return Math.max(...arr)
}