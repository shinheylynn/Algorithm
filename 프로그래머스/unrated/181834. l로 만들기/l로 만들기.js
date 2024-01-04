function solution(myString) {
    return myString.split('').map(x => x < 'l' ? 'l' : x ).join('');
}