function solution(my_str, n) {
    let arr = Array.from(my_str);
    let ans = [];
    
    while(arr.length > 0) {
        ans.push(arr.splice(0, n).join(''))
    }
    
    return ans;
}