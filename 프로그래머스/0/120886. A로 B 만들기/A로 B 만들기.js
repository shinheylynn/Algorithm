function solution(before, after) {
    let befores = [...before].sort().join('');
    let afters = [...after].sort().join('');
    
    return befores === afters ? 1 : 0;
    
}