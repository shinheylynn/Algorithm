function solution(s) {
    let arr = s.split(" ")
    let ans = [];
    
    arr.forEach(x => {
        if (x != "Z") {
            ans.push(x)
        } else {
            ans.pop();
        }
    })
    
    return ans.reduce((acc, cur) => acc + Number(cur), 0)
}