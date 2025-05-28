function solution(my_string) {
    let numbers = my_string.replace(/[^0-9]/g, ",").split(",");
    let answer = 0;
    
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] !== "") {
            answer += Number(numbers[i])
        }
    }
    
    return answer
}