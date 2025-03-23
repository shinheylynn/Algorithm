function solution(survey, choices) {
    const types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
    const scores = new Map()
    
    for (let i = 0; i < survey.length; i++) {
        const [negative, positive] = survey[i].split('')
        
        if ([5,6,7].includes(choices[i])) {
            const score = scores.get(positive) || 0
            
            scores.set(positive, score + (choices[i] - 4))
            scores.set(negative, scores.get(negative) || 0)
        }
        else if ([1,2,3].includes(choices[i])) {
            const score = scores.get(negative) || 0
            
            scores.set(negative, score + (4 - choices[i]))
            scores.set(positive, scores.get(positive) || 0)
        }
    }
    
    return types.map(type => {
       const first = type[0]
       const second = type[1]
       
       if (scores.get(first) < scores.get(second)) {
           return second
       } else if (scores.get(first) > scores.get(second)) {
           return first
       } else {
           return first < second ? first : second
       }
    }).join('')
}