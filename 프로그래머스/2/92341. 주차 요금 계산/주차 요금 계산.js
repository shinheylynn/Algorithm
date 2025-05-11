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
    const map = new Map()
    const answer = []
    const arr = records
    .map(e => e.split(' '))
    .sort((a, b) => a[1].localeCompare(b[1]))
    
    if (records.length === 1) {
        answer.push(getTotalFee(getTimeDiff(arr[0][0], '23:59'), fees))
        return answer
    }
    
    arr.forEach(e => {
      const [time, car, action] = e
      
      if (!map.has(car)) map.set(car, [])
      map.get(car).push(time)
    })
    
    Array.from(map).map(([key, value]) => {
      let totalDiff = value.reduce((acc, cur, i) => {
        if (i % 2 === 0 && value[i + 1]) {
          return acc + getTimeDiff(value[i], value[i + 1])
        }
        return acc
      }, 0)

      if (value.length % 2 === 1) {
        totalDiff += getTimeDiff(value[value.length - 1], '23:59')
      }
      
      answer.push(getTotalFee(totalDiff, fees))
    })
    
    return answer
}