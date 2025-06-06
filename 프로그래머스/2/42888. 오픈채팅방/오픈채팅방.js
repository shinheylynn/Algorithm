function solution(record) {
    const result = []
    const userObj = {}
    
    record.forEach(x => {
        const [action, id, nickname] = x.split(' ')
        
        if (action === 'Enter' || action === 'Change') {
            userObj[id] = nickname
        } 
    })
    
    record.forEach(x => {
        const [action, id, nickname] = x.split(' ')
        
        if (action === 'Enter') {
            result.push(userObj[id] + '님이 들어왔습니다.')
        } else if (action === 'Leave') {
            result.push(userObj[id] + '님이 나갔습니다.')
        }
    })
    
    return result
}