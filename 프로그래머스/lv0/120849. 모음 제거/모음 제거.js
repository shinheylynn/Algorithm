function solution(my_string) {
    let arr = ["a", "e", "i", "o", "u"];
    let strings = my_string.split("");
    
    return (strings.filter(x => !arr.includes(x))).join("")
}