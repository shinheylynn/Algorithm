function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return 5 * cities.length
    }
    
    let cache = []
    let hit = 0
    
    for (let i = 0; i < cities.length; i++) {
        const upperCity = cities[i].toUpperCase()
        
        if (cache.includes(upperCity)) {
            const index = cache.indexOf(upperCity)
            cache.splice(index, 1)
            hit++
        }
        
        cache.unshift(upperCity)
        
        if (cache.length > cacheSize) {
            cache.pop()
        }
    }
    
    return hit * 1 + (cities.length - hit) * 5
}