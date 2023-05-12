function solution(my_string) {
    let numbers = "";
    let answer = 0;
    
    for (i of my_string) {
        if(!isNaN(i)) numbers += i;
    }
    let arr = [...numbers]
    
    for (i = 0; i < arr.length; i++) {
        answer += parseInt(arr[i])
    }
    
    return answer
}