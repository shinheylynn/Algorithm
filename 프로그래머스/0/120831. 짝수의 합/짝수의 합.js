function solution(n) {
    let even = [];
    for (i=1; i<=n; i++) {
        if (i % 2 == 0) even.push(i);    
    };
    const result = even.reduce(function add(acc, cur){
        return acc + cur;
    }, 0);
    return result;
}