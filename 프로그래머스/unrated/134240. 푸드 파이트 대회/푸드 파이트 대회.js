function solution(food) {
    let left = [];
    
    food.forEach((x, idx) => left.push(String(idx).repeat(Math.floor(x / 2))));
    
    
    return left.join('') + "0" + left.reverse().join('')
}