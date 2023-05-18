function solution(age) {
    const alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
    let arr = age.toString().split('').map(Number);
    let answer = [];
    
    for (i = 0; i < arr.length; i++) {
        answer.push(alphabet[arr[i]])
    }
    return answer.join('');
}