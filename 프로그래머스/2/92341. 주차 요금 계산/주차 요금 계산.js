function getTimeDiff(t1, t2) {
  const [h1, m1] = t1.split(":").map(Number)
  const [h2, m2] = t2.split(":").map(Number)
    
  return Math.abs((h1 * 60 + m1) - (h2 * 60 + m2))
}

function getTotalFee(time, [baseTime, baseFee, unitTime, unitFee]) {
  if (time <= baseTime) return baseFee
  return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee
}

function solution(fees, records) {
    if (records.length === 1) {
        const [time, car] = records[0].split(' ')
        const totalTime = getTimeDiff(time, '23:59')
        return [getTotalFee(totalTime, fees)]
      }
    
    const obj = {}
    const answer = []
    
    for (const r of records) {
        const [time, car] = r.split(' ')
        
        if(!obj[car]) obj[car] = []
        obj[car].push(time)
    }
    
    const sortedObj = Object.entries(obj)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    
    for (const [car, times] of sortedObj) {
        let totalDiff = times.reduce((acc, _, i) => {
            if (i % 2 === 0 && times[i + 1]) {
                return acc + getTimeDiff(times[i], times[i + 1])
            }
            return acc
        }, 0)
        
        if (times.length % 2 === 1) {
            totalDiff += getTimeDiff(times[times.length - 1], '23:59')
        }
        
        answer.push(getTotalFee(totalDiff, fees))
    }
    
    return answer
}