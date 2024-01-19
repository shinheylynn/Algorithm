function solution(a, b, c) {
    if (a !== b && a !== c && b !== c) return a + b + c;
    if (a === b && b === c) return (a + b + c) * (a**2 + b**2 + c**2) * (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3));
    else return (a + b + c) * (a**2 + b**2 + c**2);
}