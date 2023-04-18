function solution(numbers) {
    let array = numbers.sort((a,b) => a - b);
    let arrayNumber = array.length - 1;
    
    return array[arrayNumber] * array[arrayNumber - 1];
}