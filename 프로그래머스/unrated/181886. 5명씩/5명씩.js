function solution(names) {
    let temp = [];

    for (i = 0; i < names.length; i += 5) {
        arr = names.slice(i, i + 5);
        temp.push(arr);
    }
    
    return temp.map(x => x[0]);
}