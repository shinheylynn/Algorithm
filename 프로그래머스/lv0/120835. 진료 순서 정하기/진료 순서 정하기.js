function solution(emergency) {
    let ascending = [...emergency].sort((a, b) => b - a)
    let ascObj = {...ascending}
    
    const answer = emergency.map((value) => {
        const key = Object.keys(ascObj).find((k) => ascObj[k] === value);
        return parseInt(Number(key) + 1);
    })
    
    return answer;
}