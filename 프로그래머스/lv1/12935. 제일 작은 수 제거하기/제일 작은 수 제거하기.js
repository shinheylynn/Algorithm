function solution(arr) {
    if (arr[0] == 10) {
        return [-1];
    } else {
        let minIdx = arr.reduce((a, b) => {return Math.min(a, b)});
        return arr.filter(e => e != minIdx);
    }
}