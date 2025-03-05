function solution(N, stages) {
    const failureRateMap = new Map()
    
    for (let i = 1; i <= N; i++) {
        const reached = []
        const failed = []
        
        stages.forEach(stage => {
            if (stage >= i) {
                reached.push(stage)
            } 
            if (stage === i) {
                failed.push(stage)
            }
        })
        
        const failureRate = reached.length === 0 ? 0 : failed.length / reached.length
        failureRateMap.set(i, failureRate)
    }
    const sortedMap = new Map([...failureRateMap].sort((a, b) => b[1] - a[1]))
    return Array.from(sortedMap.keys())
}