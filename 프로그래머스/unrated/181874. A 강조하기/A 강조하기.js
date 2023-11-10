function solution(myString) {
    return [...myString.toLowerCase()].map(x => {
        if (x == 'a') { return 'A' }
        else return x
    }).join('')
}