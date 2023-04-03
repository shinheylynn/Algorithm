function solution(arr) {
    arrSum = arr.reduce((acc, cur) => acc + cur, 0);
    return arrSum / arr.length;
}