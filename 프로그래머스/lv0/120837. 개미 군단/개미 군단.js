function solution(hp) {
    let ants = [5, 3, 1];
    let answer = [];
    let sum = 0;
    
    ants.map(x => {
            answer.push(parseInt(hp / x));
            hp -= parseInt(hp / x) * x;
        })
    
    answer.forEach(x => sum += x);
    return sum
}