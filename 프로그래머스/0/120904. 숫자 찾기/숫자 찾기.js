function solution(num, k) {
    let array = [...String(num)];
    
    for (i = 0; i < array.length; i++) {
        if (array[i] == k) {
            return i + 1
        }
    }
    
    return -1
}