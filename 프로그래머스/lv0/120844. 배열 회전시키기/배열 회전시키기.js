function solution(numbers, direction) {
    if (direction == "right") {
        let tmp = numbers[numbers.length - 1];
        numbers.splice(numbers.length - 1, 1);
        numbers.unshift(tmp);
    } else if (direction == "left") {
        let tmp = numbers[0];
        numbers.shift();
        numbers.push(tmp);
    }
    
    return numbers;
}