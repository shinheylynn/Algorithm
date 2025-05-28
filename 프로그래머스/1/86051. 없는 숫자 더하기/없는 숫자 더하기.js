function solution(numbers) {
    let oneToTen = [0,1,2,3,4,5,6,7,8,9];
    let answer = oneToTen.filter(x => !numbers.includes(x));
    
    return answer.reduce((a, b) => a + b)
}