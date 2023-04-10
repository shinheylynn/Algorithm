function solution(a, b) {
    arr = [];
    
    if (a - b == 0) {
        return a;
    } else if (a < b) {
        for (i = a; i <= b; i++) {
            arr.push(i);
        };
    } else if (b < a) {
        for (i = b; i <= a; i++) {
            arr.push(i);
        };
    };
    
    let result = arr.reduce((cum, n) => {return cum + n});
    return result;
}