function solution(cacheSize, cities) {
    let arr = []
    let hit = 0
    const upperCaseCities = cities.map(i => i.toUpperCase())
    
    for (let i = 0; i < upperCaseCities.length; i++) {
        if (cacheSize === 0) {
            return 5 * upperCaseCities.length
        }
        
        if (arr.includes(upperCaseCities[i])) {
            const index = arr.indexOf(upperCaseCities[i])
            arr.splice(index, 1)
            hit++
        }
        
        arr.unshift(upperCaseCities[i])
        
        if (arr.length > cacheSize) {
            arr.pop()
        }
    }
    
    return hit * 1 + (cities.length - hit) * 5
}