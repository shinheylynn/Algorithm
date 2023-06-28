function solution(a, b, n) {
    let totalBottles = 0;
    let emptyBottles = n;
    
    while (emptyBottles >= a) {
        let newBottles = Math.floor(emptyBottles / a) * b;
        totalBottles += newBottles;
        
        emptyBottles = (emptyBottles % a) + newBottles;
    }
    
    return totalBottles;
}