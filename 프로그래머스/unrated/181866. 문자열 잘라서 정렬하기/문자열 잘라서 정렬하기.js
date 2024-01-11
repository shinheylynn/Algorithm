function solution(myString) {
    let answer = myString.split("x").sort();
    
    while (answer[0] === "") {
        answer.shift();
    }
    
    return answer
}