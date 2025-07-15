function solution(msg) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let arr = [...msg]
    const answer = []
    let w = ''
    let n = 0
    
   while (arr.length > 0) {
       if (letters.includes(arr.join(''))) {
           n += arr.join('').length
           answer.push(letters.indexOf(arr.join('')) + 1)
           letters.push(arr.join('') + w)
           arr = [...msg]
           arr.splice(0, n)
        } else {
            w = arr[arr.length - 1]
            arr.pop()
        }
   }
    
    return answer
}