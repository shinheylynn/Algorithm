function solution(n) {
    let numbers = (n+"").split('').map(i => Number(i)).sort((a, b) => b - a).join('');
    return Number(numbers);
    
}