function solution(cipher, code) {
    let arr = [...cipher];
    let answer = [];
    for (i = 1; i * code <= arr.length; i++) {
        answer.push(arr[i * code - 1]);
    }
    return answer.join("")
}