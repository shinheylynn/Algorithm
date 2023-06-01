function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    
    num.forEach((x, idx) => {
        numbers = numbers.replaceAll(x, idx)
    })
    
    return Number(numbers)
}