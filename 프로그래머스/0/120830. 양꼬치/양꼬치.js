function solution(n, k) {
    drink = k - parseInt(n/10);
    return 12000*n + 2000*drink
}