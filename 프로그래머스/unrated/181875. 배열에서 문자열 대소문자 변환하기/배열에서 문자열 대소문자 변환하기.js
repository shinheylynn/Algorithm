function solution(strArr) {
    let answer = [];
    
    strArr.map((e,idx) => {
        if (idx % 2 == 1) {
        answer.push(e.toUpperCase())
    } else if (idx % 2 == 0) {
        answer.push(e.toLowerCase())
    }}) 
    
    return answer;
}