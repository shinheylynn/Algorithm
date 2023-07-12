function solution(s) {
    let ans = [];
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (!stack.includes(s[i])) {
            ans.push(-1);
            stack.push(s[i]);
        } else if (stack.includes(s[i])) {
            ans.push(i - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
        }
    }
    
    return ans;
}