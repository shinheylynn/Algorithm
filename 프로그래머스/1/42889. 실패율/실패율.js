function solution(N, stages) {
    N = Array.from({ length: N }, (_, i) => i + 1)
    const failureRateMap = new Map()
    
    for (let i = 0; i < N.length; i++) {
        const reached = []
        const failed = []
        
        stages.forEach(stage => {
            if (stage >= N[i]) {
                reached.push(stage)
            } 
            if (stage === N[i]) {
                failed.push(stage)
            }
        })
        
        const failureRate = reached.length === 0 ? 0 : failed.length / reached.length
        failureRateMap.set(N[i], failureRate)
    }
    const sortedMap = new Map([...failureRateMap].sort((a, b) => b[1] - a[1]))
    return Array.from(sortedMap.keys())
}