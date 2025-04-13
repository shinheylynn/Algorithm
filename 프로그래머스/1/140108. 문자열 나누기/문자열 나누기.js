function solution(s) {
    let answer = 0
    
    let i = 0
    while (i < s.length) {
        let x = s[i]
        let same = 1
        let diff = 0
        
        let j = i + 1
        while (j < s.length) {
            if (x === s[j]) same++
            else diff++
            
            if (same === diff) break
            
            j++
        }
        
        answer++
        i = j + 1
    }
    
    return answer
}