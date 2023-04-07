function solution(x) {
    let cum = (x+"")
    .split('')
    .map(i => Number(i))
    .reduce((cum, n) => {return cum + n});
    
    return x % cum == 0 ? true : false;
}