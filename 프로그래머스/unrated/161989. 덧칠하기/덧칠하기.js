function solution(n, m, section) {
    let painted = section[0] - 1;
    let answer = 0;
    
    section.forEach(x => {
        if (painted < x) {
            painted = x + m - 1;
            answer += 1;
        }
    })
    
    return answer;
}