function solution(friends, gifts) {
    const record = {} 
    const giftedCount = {} 
    const receivedCount = {} 
    const result = {}
    
    gifts.forEach(gift => {
        const [sender, receiver] = gift.split(' ')
        
        if (!record[sender]) record[sender] = {}
        record[sender][receiver] = (record[sender][receiver] || 0) + 1 
        
        giftedCount[sender] = (giftedCount[sender] || 0) + 1
        receivedCount[receiver] = (receivedCount[receiver] || 0) + 1
    })
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const a = friends[i]
            const b = friends[j]
            
            const aToB = (record[a] && record[a][b]) || 0
            const bToA = (record[b] && record[b][a]) || 0
  
            if (aToB > bToA) {
                result[a] = (result[a] || 0) + 1
            } else if (aToB < bToA) {
                result[b] = (result[b] || 0) + 1
            } else {
                const quotientA = (giftedCount[a] || 0) - (receivedCount[a] || 0)
                const quotientB = (giftedCount[b] || 0) - (receivedCount[b] || 0)
                
                if (quotientA > quotientB) {
                    result[a] = (result[a] || 0) + 1
                } else if (quotientA < quotientB) {
                    result[b] = (result[b] || 0) + 1
                } 
            }
        }
    }
    
    return Math.max(0, ...Object.values(result))
}