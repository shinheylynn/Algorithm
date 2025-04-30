function solution(k, tangerine) {
    const map = new Map()
    let answer = 0
    
    tangerine.forEach(i => {
        map.set(i, (map.get(i) || 0) + 1)
    })
    
    const sortedSize = Array.from(map.values()).sort((a, b) => b - a)
    
    for (let i = 0; i < sortedSize.length; i++) {
        // if (sortedSize[i] >= k && i === 0) {
        //     answer = 1
        //     break
        // } 
        
        if (k > 0) {
            k = k - sortedSize[i]
            answer++
        } else break
    }
    
    return answer
}