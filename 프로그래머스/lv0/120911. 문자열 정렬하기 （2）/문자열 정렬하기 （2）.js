function solution(my_string) {
    let lower = [...my_string.toLowerCase()];
    let arr = lower.sort();
    return arr.join('')
}