function getTimeDiff(t1, t2) {
  const [h1, m1] = t1.split(":").map(Number)
  const [h2, m2] = t2.split(":").map(Number)
    
  return Math.abs((h1 * 60 + m1) - (h2 * 60 + m2))
}

function getTotalFee(time, fees) {
    const answer = []
    
    if (time < fees[0]) {
        answer.push(fees[1])
    } else {
     answer.push(fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3])   
    }
    
    return answer
}

function solution(fees, records) {
    const map = new Map()
    const arr = records.map(e => e.split(' '))
    arr.sort((a, b) => {
      return a[1].localeCompare(b[1])
    })
    
    if (records.length === 1) {
        return getTotalFee(getTimeDiff(arr[0][0], '23:59'), fees)
    }
    
    arr.forEach(e => {
        const key = e[1]
        const list = map.get(key) || []
        list.push(e[0])
        map.set(key, list)
    })
    
    const result = Array.from(map).map(([key, value]) => {
      let totalDiff = value.reduce((acc, cur, i) => {
        if (i % 2 === 0 && value[i + 1]) {
          return acc + getTimeDiff(value[i], value[i + 1])
        }
        return acc
      }, 0)

      if (value.length % 2 === 1) {
        totalDiff += getTimeDiff(value[value.length - 1], '23:59')
      }

      return totalDiff
    })
    
    return result.map(e => getTotalFee(e, fees)).flat()
}