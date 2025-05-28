function solution(money) {
    let answer = [];
    
    let drink = parseInt(money/5500);
    let change = money - 5500*drink;
    answer.push(drink, change);
    return answer;
}