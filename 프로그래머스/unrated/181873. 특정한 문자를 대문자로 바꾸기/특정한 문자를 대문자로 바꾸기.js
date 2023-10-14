function solution(my_string, alp) {
    return [...my_string].map(x => x.toLowerCase() === alp ? x.toUpperCase() : x).join('');

}