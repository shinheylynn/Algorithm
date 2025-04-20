function solution(players, m, k) {
    let result = 0
    const servers = Array(24).fill(0)
    
    for (let i = 0; i < players.length; i++) {
        let active = 0
        for (let j = i - k + 1; j <= i; j++) {
            if (j >= 0) active += servers[j]
        }
        
        const required = Math.floor(players[i] / m)
        
        if (required > active) {
            const need = required - active
            servers[i] = need
            result += need
        }
    }
    
    return result
}