function solution(N, stages) {
    const failureRateMap = new Map()
    
    for (let i = 1; i <= N; i++) {
        let reached = 0
        let failed = 0
        
        stages.forEach(stage => {
            if (stage >= i) {
                reached++
            } 
            if (stage === i) {
                failed++
            }
        })
        
        const failureRate = failed / reached
        failureRateMap.set(i, failureRate)
    }

    return [...failureRateMap].sort((a, b) => b[1] - a[1]).map(item => item[0])
}