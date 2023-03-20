function solution(numbers) {
    let sum = 0;
    
    numbers.forEach(function(item){sum+=item})
    return (sum/numbers.length).toFixed(1)
    
}