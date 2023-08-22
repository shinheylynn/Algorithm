function solution(num_str) {
    let arr = num_str.split("");
    const answer = arr.reduce((acc, cur) => {return acc + Number(cur)}, 0);
    
    return answer;
}