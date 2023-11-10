function solution(a, b) {
    let strA = String(a);
    let strB = String(b);
    
    return strA + strB > strB + strA ? Number(strA + strB) : Number(strB + strA)
}