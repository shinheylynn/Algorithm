function solution(myString, pat) {
    let newString = [...myString].map(x => {
        if (x == "A") { 
            return "B"
        } else { return "A" }
    })
    
    return newString.join("").includes(pat) ? 1 : 0
}