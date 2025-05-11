function getTimeDiff(t1, t2) {
  const [h1, m1] = t1.split(":").map(Number)
  const [h2, m2] = t2.split(":").map(Number)
    
  return Math.abs((h1 * 60 + m1) - (h2 * 60 + m2))
}

function getTotalFee(time, [baseTime, baseFee, unitTime, unitFee]) {
  if (time <= baseTime) return baseFee;
  return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
}

function solution(fees, records) {
    const arr = records
    .map(e => e.split(' '))
    .sort((a, b) => a[1].localeCompare(b[1]))
    
    const map = new Map()
    const answer = []
    
    if (records.length === 1) {
        answer.push(getTotalFee(getTimeDiff(arr[0][0], '23:59'), fees))
        return answer
    }
    
    arr.forEach(e => {
      const [time, car, action] = e
      
      if (!map.has(car)) map.set(car, [])
      map.get(car).push(time)
    })
    
    for (const [car, times] of map) {
        let totalDiff = times.reduce((acc, cur, i) => {
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