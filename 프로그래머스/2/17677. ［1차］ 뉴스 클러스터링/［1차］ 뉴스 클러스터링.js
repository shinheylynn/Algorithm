const solution = (str1, str2) => {
    let jaccard
    const arr1 = makeSet(str1.toLowerCase())
    const arr2 = makeSet(str2.toLowerCase())
    
    const intersection = makeIntersection(arr1, arr2)
    const union = makeUnion(arr1, arr2)
    
    if (intersection === 0 && union === 0) {
        jaccard = 1
    } else jaccard = intersection / union
    
    return Math.floor(jaccard * 65536)
}

const makeSet = (string) => {
    const arr = []
    
    Array.from(string).forEach((char, i) => {
        if (i < string.length - 1) {
            arr.push(char + string[i + 1])
        }
    })
    
    return arr.filter(el => /^[a-zA-Z]+$/.test(el))
}

const makeIntersection = (arr1, arr2) => {
    const map = new Map()
    const result = []
    
    for (const char of arr1) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    
    for (const char of arr2) {
        const count = map.get(char)
        if (count > 0) {
            result.push(char)
            map.set(char, count - 1)
        }
    }
    
    return result.length
}

const makeUnion = (arr1, arr2) => {
    const count1 = new Map()
    const count2 = new Map()
    const result = []
    
    for (const char of arr1) {
        count1.set(char, (count1.get(char) || 0) + 1)
    }
    
    for (const char of arr2) {
        count2.set(char, (count2.get(char) || 0) + 1)
    }
    
    const union = new Set([...count1.keys(), ...count2.keys()])
    for (const key of union) {
        const maxCount = Math.max(count1.get(key) || 0, count2.get(key) || 0)
        result.push(...Array(maxCount).fill(key))
    }
    
    return result.length
}