function solution(s1, s2) {
    let arr = s2.filter(x => s1.includes(x));
    return arr.length;
}