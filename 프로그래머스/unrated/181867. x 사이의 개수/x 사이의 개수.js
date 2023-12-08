function solution(myString) {
    arr = myString.split("x")
    
    return arr.map(x => x.length)
}