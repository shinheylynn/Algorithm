function solution(n) {
    let arr = [];
    let num = 0;
    while (arr.length !== n) {
        if (num%3!==0 && !(num.toString()).includes('3')) arr.push(num);
        num++    
    }
    return arr.pop();
}
