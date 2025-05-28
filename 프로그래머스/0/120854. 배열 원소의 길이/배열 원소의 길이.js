function solution(strlist) {
    let answer = [];
    
    for (i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].split('').length);
    };
    
    return answer;
}