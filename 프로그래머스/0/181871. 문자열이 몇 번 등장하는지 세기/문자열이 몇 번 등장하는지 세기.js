function solution(myString, pat) {
    const arr = [...myString]
    let answer = 0;
    
    for (i = 0; i < arr.length; i++) {
        if (arr.slice(i, i + pat.length).join("") === pat) {
            answer += 1
        }
    }
    
    return answer
}