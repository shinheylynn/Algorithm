function solution(s) {
    if (s.length % 2 == 0) {
        let even = s.length / 2;
        return s.slice(even - 1, even + 1);
    } else {
        let odd = parseInt(s.length / 2);
        return s.slice(odd, odd + 1);
    }
}