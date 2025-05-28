function solution(order) {
    let arr = order.toString().split('').map(Number);
    let answer = 0;
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 3 || arr[i] == 6 || arr[i] == 9) {
         answer += 1;   
        }
    }
    return answer;
}