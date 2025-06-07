function solution(record) {
    const result = []
    const userObj = {}
    const output = {
        'Enter' : '님이 들어왔습니다.',
        'Leave' : '님이 나갔습니다.'
    }
    
    record.forEach(x => {
        const [action, id, nickname] = x.split(' ')
        
        if (action !== 'Change') {
            result.push([action, id])
        } 
        
        if (nickname) {
            userObj[id] = nickname
        }
    })
    
    return result.map(([action, userId]) => {
        return `${userObj[userId]}${output[action]}`
    })
}