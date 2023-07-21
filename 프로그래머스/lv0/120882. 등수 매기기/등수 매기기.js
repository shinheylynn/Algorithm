function solution(score) {
    let avg = [];
    let answer = [];
    
    score.forEach(x => {
        avg.push((x[0] + x[1]) / 2)
    })
    
    const rank = [...avg].sort((a, b) => b - a)
    for(let n of avg){
        answer.push(rank.indexOf(n) + 1)
    }
    
    return answer;
}