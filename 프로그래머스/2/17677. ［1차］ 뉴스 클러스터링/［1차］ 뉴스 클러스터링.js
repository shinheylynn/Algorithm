const solution = (str1, str2) => {
    let jaccard
    const arr1 = makeSet(str1.toLowerCase())
    const arr2 = makeSet(str2.toLowerCase())
    
    const [intersection, union] = makeUnionAndIntersection(arr1, arr2)
    
    if (intersection === 0 && union === 0) {
        jaccard = 1
    } else jaccard = intersection / union
    
    return Math.floor(jaccard * 65536)
}

const makeSet = (str) => {
    const arr = []
    
    Array.from(str).forEach((x, idx) => {
        if (idx < str.length - 1) {
            arr.push(x + str[idx + 1])
        }
    })

    return arr.filter(x => /[a-zA-Z]{2}/.test(x))
}

const makeUnionAndIntersection = (arr1, arr2) => {
    let union = 0
    let intersection = 0
    const count1 = new Map()
    const count2 = new Map()
    
    for (const char of arr1) {
        count1.set(char, (count1.get(char) || 0) + 1)
    }
    
    for (const char of arr2) {
        count2.set(char, (count2.get(char) || 0) + 1)
    }
    
    const unionKeys = new Set([...count1.keys(), ...count2.keys()])
    for (const char of unionKeys) {
        const minCount = Math.min(count1.get(char) || 0, count2.get(char) || 0)
        const maxCount = Math.max(count1.get(char) || 0, count2.get(char) || 0)
        
        if (minCount > 0) intersection += minCount
        union += maxCount
    }
    
    return [intersection, union]
}