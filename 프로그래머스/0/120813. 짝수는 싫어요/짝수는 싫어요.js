function solution(n) {
    let odd = [];
    for (i=n; i>0; i--) {
        if (i%2==1) {
            odd.push(i)
        }
    }
    return odd.sort((a,b) => a-b)
}